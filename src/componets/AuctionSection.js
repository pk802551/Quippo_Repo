import React, { useEffect, useState, useCallback, useRef } from "react";
import { Row, Col, Card, Spinner, Alert, Form, Button, Modal } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import BuyNowModal from "../model/BuyModal";
import { toast } from "react-toastify";
import axios from "axios";


const PAGE_SIZE = 10;

function MarketPlacePage() {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProductName, setSelectedProductName] = useState("");
  const [approvedBidMin, setapprovedBidMin] = useState("");
  const [approvedBidMax, setapprovedBidMax] = useState("");
  const [year, setyear] = useState("");
  const [showBuyNow, setShowBuyNow] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState();
  const [user, setUser] = useState()
  const [wishlist, setWishlist] = useState()
  const navigate = useNavigate();
  const scrollRef = useRef(null);


  useEffect(() => {
    const saveduser = localStorage.getItem("loggedInUser");
    if (saveduser) {
      setUser(JSON.parse(saveduser));
    }
  }, []);



  const handleShow = (vehicles) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user?.userIdid) {
      setSelectedVehicle(vehicles);
      setShowBuyNow(true);
    } else {
      setShowLoginPrompt(true);
    }
  };

  const handleLoginRedirect = () => {
    setShowLoginPrompt(false);
    navigate("/loginPage");
  };
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const fetchVehicles = useCallback(async (pageNumber, filters = {}) => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        page: pageNumber,
        size: PAGE_SIZE,
        ...(filters.make && { make: filters.make }),
        ...(filters.state && { state: filters.state }),
        ...(filters.productName && { productName: filters.productName }),
        ...(filters.approvedBidMin && { approvedBidMin: filters.approvedBidMin }),
        ...(filters.approvedBidMax && { approvedBidMax: filters.approvedBidMax }),
        ...(filters.year && { year: filters.year }),
      }).toString();

      const res = await fetch(`http://localhost:8080/vehicles/search?${queryParams}`);
      const response = await res.json();

      if (response.statusCode === 200) {
        if (pageNumber === 0) {
          setVehicles(response.data);
        } else {
          setVehicles((prev) => [...prev, ...response.data]);
        }
        setPage(response.pagination.page);
        setTotalPages(response.pagination.totalPages);
        setHasMore(response.pagination.page < response.pagination.totalPages - 1);
      } else {
        setError("Failed to fetch vehicles");
      }
    } catch (err) {
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVehicles(0, {
      make: selectedMake,
      state: selectedLocation,
      productName: selectedProductName,
      approvedBidMin,
      approvedBidMax,
      year,
    });
  }, [
    selectedMake,
    selectedLocation,
    selectedProductName,
    approvedBidMin,
    approvedBidMax,
    year,
    fetchVehicles,
  ]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || loading || !hasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      fetchVehicles(page + 1, {
        make: selectedMake,
        state: selectedLocation,
        productName: selectedProductName,
        approvedBidMin,
        approvedBidMax,
        year,
      });
    }
  };

  const handleClose = () => {
    setShowBuyNow(false);
  };
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  const clearFilters = () => {
    setSelectedMake("");
    setSelectedLocation("");
    setSelectedProductName("");
    setapprovedBidMin("");
    setapprovedBidMax("");
    setyear("");
  };


  const handleWishlistToggle = async (vehicles) => {
    const vehicleId = vehicles.vehicleId;

    const isAlreadyWishlisted = Array.isArray(wishlist) && wishlist?.some((item) => item.vehicleId === vehicleId);

    try {
      if (isAlreadyWishlisted) {
        await removeFromWishlist(vehicleId, user?.userId);
        setWishlist(prev => prev.filter((item) => item.vehicleId !== vehicleId));
        toast.success("Item removed from wishlist");
      } else {
        const response = await addToWishlist(vehicleId, user?.userId);
        setWishlist(prev => [...prev, response]);
        toast.success("Item added to wishlist");
      }
    } catch (error) {
      console.error("Wishlist toggle failed:", error);
      toast.error("Failed to update wishlist");
    }
  };


  const addToWishlist = async (vehicleId, userId) => {
    const response = await axios.post("http://localhost:8080/wishlist", {
      userId,
      vehicleId,
    });
    return response.data;
  };
  const removeFromWishlist = async (vehicleId, userId) => {
    await axios.delete(`http://localhost:8080/wishlist/${vehicleId}?userId=${userId}`);
  };







  const handleDownload = (link) => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = ''; // Optional filename
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <>
      <Row>
        {/* Sidebar Filters */}
        <Col lg={3} md={4}>
          <Card className="mb-4" style={{ maxHeight: "90vh", overflowY: "auto", marginTop: "10%" }}>
            <Card.Body>
              <h5 className="mb-3">Filter Equipment</h5>

              {/* Budget */}
              <Form.Group>
                <Form.Label>
                  Budget Range (₹): {approvedBidMin || '...'} - {approvedBidMax || '...'}
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Label>Min</Form.Label>
                    <Form.Range
                      min={1000}
                      max={10000000}
                      step={10}
                      value={approvedBidMin || 1000}
                      onChange={(e) => setapprovedBidMin(e.target.value)}
                    />
                    <Form.Control
                      type="number"
                      min={1000}
                      max={approvedBidMax || 10000000}
                      step={10}
                      value={approvedBidMin}
                      onChange={(e) => setapprovedBidMin(e.target.value)}
                      className="mt-2"
                      placeholder="Enter Min"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Max</Form.Label>
                    <Form.Range
                      min={approvedBidMin || 1000}
                      max={10000000}
                      step={10}
                      value={approvedBidMax || 10000000}
                      onChange={(e) => setapprovedBidMax(e.target.value)}
                    />
                    <Form.Control
                      type="number"
                      min={approvedBidMin || 1000}
                      max={10000000}
                      step={10}
                      value={approvedBidMax}
                      onChange={(e) => setapprovedBidMax(e.target.value)}
                      className="mt-2"
                      placeholder="Enter Max"
                    />
                  </Col>
                </Row>
              </Form.Group>




              {/* Model Year */}
              <Form.Group>
                <Form.Label>Model Year</Form.Label>
                <Form.Select value={year} onChange={(e) => setyear(e.target.value)}>
                  <option value="">Any</option>
                  {Array.from({ length: new Date().getFullYear() - 1947 + 1 }, (_, i) => 1947 + i).map((yr) => (
                    <option key={yr} value={yr}>{yr}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Make */}
              <Form.Group>
                <Form.Label>Make</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter make"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                />
              </Form.Group>

              {/* Product Name */}
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  value={selectedProductName}
                  onChange={(e) => setSelectedProductName(e.target.value)}
                />
              </Form.Group>

              {/* Location */}
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
              </Form.Group>

              <Button variant="secondary" size="sm" className="mt-3" onClick={clearFilters}>
                Clear Filters
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Vehicle List */}
        <Col lg={9} md={8} style={{ marginTop: "3%" }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h4 className="text-dark fw-semibold">Popular Equipment</h4>
            <Button
              variant="success"
              className="fw-semibold px-4 py-2 rounded-pill"
              onClick={() => navigate("/sell")}
            >
              Sell Equipment
            </Button>
          </div>

          <div className="mb-4">
            <SearchBar />
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <div
            className="scroll-container"
            style={{ height: "80vh", overflowY: "auto", paddingRight: "10px" }}
            ref={scrollRef}
          >
            <Row className="g-4">
              {vehicles.map((item, index) => {
                const isWishlisted = Array.isArray(wishlist) && wishlist.some((i) => i.vehicleId === item.vehicleId);
                return (
                  <Col xs={12} sm={6} md={4} key={item.id || index}>
                    <Card className="equipment-card h-100 border-0 shadow rounded-4 overflow-hidden mt-3">
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={item.imageUrl || require("../assets/image/collage.jpg")}
                          alt={`${item.makeName} ${item.modelName}`}
                        />

                        {isWishlisted ? (
                          <HeartFill
                            className="position-absolute top-0 end-0 m-2 text-danger fs-5 cursor-pointer"
                            onClick={() => handleWishlistToggle(item)}
                          />
                        ) : (
                          <Heart
                            className="position-absolute top-0 end-0 m-2 text-danger fs-5 cursor-pointer"
                            onClick={() => handleWishlistToggle(item)}
                          />
                        )}
                        {/* Render the rest of your vehicle card info here */}
                      </div>

                      <Card.Body className="p-3 d-flex flex-column justify-content-between">
                        <Card.Title className="fs-6 fw-bold text-dark text-truncate">
                          {item.custUvModel} • {item.makeName} {item.modelName}
                        </Card.Title>

                        <div className="text-muted small mb-2">
                          <i className="bi bi-geo-alt me-1" /> {item.state}
                        </div>

                        <div className="fs-5 fw-semibold text-primary">
                          ₹{parseInt(item.approvedBid).toLocaleString()}
                        </div>
                        {item.valuationLink ? (
                          <div style={{ marginTop: '5px' }}>
                            <a
                              href={item.valuationLink}
                              rel="noopener noreferrer"
                              style={{ color: '#007bff', textDecoration: 'underline' }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDownload(item.valuationLink);
                              }}
                            >
                              Valuation Link
                            </a>
                          </div>
                        ) : null}

                        <Button
                          variant="primary"
                          size="sm"
                          className="mt-3 w-100 fw-semibold text-dark rounded-pill"
                          onClick={() => {
                            console.log("Buy Now clicked for:", item.vehicleId);
                            handleShow(item);
                          }}
                        >
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>


            {loading && (
              <div className="text-center my-4">
                <Spinner animation="border" />
              </div>
            )}

            {!hasMore && !loading && (
              <p className="text-center mt-4">No more vehicles to load</p>
            )}
          </div>
        </Col>
      </Row >

      <BuyNowModal show={showBuyNow} handleClose={handleClose} vehicle={selectedVehicle} />
      <Modal show={showLoginPrompt} onHide={() => setShowLoginPrompt(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to be logged in to proceed with buying.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginPrompt(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleLoginRedirect}>Go to Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MarketPlacePage;
