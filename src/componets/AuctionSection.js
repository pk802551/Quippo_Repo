import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card, Badge } from "react-bootstrap";
import { Funnel, Grid, List, Heart ,HeartFill} from "react-bootstrap-icons";
import "../componets/AuctionSection.css"
import EquipmentCard from "../componets/EquipmentTabs";
import BuyNowModal from "../model/BuyModal";
import Select from "react-select";
import SearchBar from "../componets/SearchBar"
import { useNavigate } from "react-router-dom";
import { useWishlist } from '../assets/WishlistContext/WishlistContext';


const MarketPlacePage = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    brand: "",
    yearMin: "",
    yearMax: "",
    minPrice: "",
    maxPrice: "",
    kmsMin: "",
    kmsMax: "",
    fuel: "",
    bodyType: "",
    transmission: "",
    color: "",
    features: "",
    seats: "",
    location: "",
    isFeatured: false,
    isNew: false,
    brands: [],
    products: [],
    states: [],
  });


  const [showBuyNow, setShowBuyNow] = useState(false);
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState(10);
  const scrollContainerRef = useRef(null);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();




  const handleShow = () => setShowBuyNow(true);
  const handleClose = () => setShowBuyNow(false);


  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Updated brand options including car brands
  const brandOptions = [
    { value: "JCB", label: "JCB" },
    { value: "Caterpillar", label: "Caterpillar" },
    { value: "Tata Hitachi", label: "Tata Hitachi" },
    { value: "Volvo", label: "Volvo" },
    // Car Brands
    { value: "Maruti Suzuki", label: "Maruti Suzuki" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Tata Motors", label: "Tata Motors" },
    { value: "Mahindra", label: "Mahindra" },
    { value: "Kia", label: "Kia" },
    { value: "Toyota", label: "Toyota" },
    { value: "Honda", label: "Honda" },
    { value: "Renault", label: "Renault" },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Skoda", label: "Skoda" },
    { value: "Nissan", label: "Nissan" },
    { value: "MG", label: "MG" }
  ];

  // Updated product options including car models
  const productOptions = [
    { value: "Excavator 210", label: "Excavator 210" },
    { value: "Loader 3DX", label: "Loader 3DX" },
    { value: "Crane 15T", label: "Crane 15T" },
    { value: "Tipper 2518", label: "Tipper 2518" },
    // Car Models
    { value: "Swift", label: "Swift" },
    { value: "Baleno", label: "Baleno" },
    { value: "Creta", label: "Creta" },
    { value: "Nexon", label: "Nexon" },
    { value: "Scorpio", label: "Scorpio" },
    { value: "Seltos", label: "Seltos" },
    { value: "Innova Crysta", label: "Innova Crysta" },
    { value: "City", label: "City" },
    { value: "Kiger", label: "Kiger" },
    { value: "Virtus", label: "Virtus" },
    { value: "Slavia", label: "Slavia" },
    { value: "Magnite", label: "Magnite" },
    { value: "Hector", label: "Hector" }
  ];


  const stateOptions = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Delhi", label: "Delhi" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" }
  ];

    const UsedEquipment = [
      {
        image: require("../assets/image/backheo.png"),
        title: "Toyota Glanza S",
        year: 2022,
        fuel: "Petrol",
        transmission: "Manual", 
        owner: "1st owner",
        price: 643000,
        isFeatured: true,
        isNew: false,
        location: "Vaishali, Ghaziabad",
        numberPlate: "UP 16 AB 1234",
      },
      {
        image: require("../assets/image/tipperNew.jpeg"),
        title: "Maruti Wagon-R LXI",
        year: 2023,
        kilometers: "53.82k",
        fuel: "CNG",
        transmission: "Manual",
        owner: "1st owner",
        emi: 10303,
        price: 527000,
        isFeatured: false,
        isNew: true,
        location: "Delhi 6, Ghaziabad",
        numberPlate: "DL 8C AA 4567",
      },
      {
        image: require("../assets/image/cat.jpeg"),
        title: "Volkswagen Polo HIGHLINE",
        year: 2021,
        kilometers: "28.46k",
        fuel: "Petrol",
        transmission: "Auto",
        owner: "1st owner",
        emi: 15932,
        price: 837000,
        isFeatured: true,
        isNew: false,
        location: "Vaishali, Ghaziabad",
        numberPlate: "DL 12 AB 3456",
      },
      {
        image: require("../assets/image/tipperNew.jpeg"),
        title: "Hyundai i20 Sportz",
        year: 2020,
        kilometers: "35.6k",
        fuel: "Diesel",
        transmission: "Manual",
        owner: "2nd owner",
        emi: 11400,
        price: 575000,
        isFeatured: false,
        isNew: false,
        location: "Noida Sector 18",
        numberPlate: "UP 14 CD 7865",
      },
      {
        image: require("../assets/image/komatsu.webp"),
        title: "KIA Sonet HTK Plus",
        year: 2023,
        kilometers: "10.2k",
        fuel: "Petrol",
        transmission: "Auto",
        owner: "1st owner",
        emi: 14750,
        price: 825000,
        isFeatured: true,
        isNew: true,
        location: "Sector 62, Noida",
        numberPlate: "UP 16 XY 1122",
      },
      {
        image: require("../assets/image/twocat.jpeg"),
        title: "Tata Nexon XZ+",
        year: 2022,
        kilometers: "24.8k",
        fuel: "Diesel",
        transmission: "Manual",
        owner: "1st owner",
        emi: 13720,
        price: 719000,
        isFeatured: false,
        isNew: false,
        location: "Indirapuram, Ghaziabad",
        numberPlate: "UP 16 ZB 9800",
      },
      {
        image: require("../assets/image/twocat.jpeg"),
        title: "Honda Amaze VX CVT",
        year: 2021,
        kilometers: "19.3k",
        fuel: "Petrol",
        transmission: "Auto",
        owner: "1st owner",
        emi: 11290,
        price: 689000,
        isFeatured: true,
        isNew: false,
        location: "Lajpat Nagar, Delhi",
        numberPlate: "DL 3C AX 7854",
      },
      {
        image: require("../assets/image/twocat.jpeg"),
        title: "Renault Kiger RXT Turbo",
        year: 2023,
        kilometers: "5.8k",
        fuel: "Petrol",
        transmission: "Manual",
        owner: "1st owner",
        emi: 13250,
        price: 765000,
        isFeatured: false,
        isNew: true,
        location: "Rohini, Delhi",
        numberPlate: "DL 5S DE 3421",
      },
      {
        image: require("../assets/image/twocat.jpeg"),
        title: "Ford EcoSport Titanium",
        year: 2020,
        kilometers: "42.5k",
        fuel: "Diesel",
        transmission: "Manual",
        owner: "2nd owner",
        emi: 12100,
        price: 615000,
        isFeatured: true,
        isNew: false,
        location: "Raj Nagar, Ghaziabad",
        numberPlate: "UP 15 CB 9081",
      },
      {
        image: require("../assets/image/twocat.jpeg"),
        title: "Nissan Magnite XV",
        year: 2022,
        kilometers: "22.0k",
        fuel: "Petrol",
        transmission: "Auto",
        owner: "1st owner",
        emi: 12670,
        price: 703000,
        isFeatured: false,
        isNew: false,
        location: "Saket, Delhi",
        numberPlate: "DL 1C AS 1345",
      },
    ];

  const isWishlisted = wishlist.some((i) => i.id ===    UsedEquipment
.id);


  const filteredEquipment = UsedEquipment.filter((item) => {
    const {
      keyword,
      category,
      brand,
      yearMin,
      yearMax,
      minPrice,
      maxPrice,
      bodyType,
      location,
      isFeatured,
      isNew,
      brands = [],
      products = [],
      states = []
    } = filters;

    const brandValues = brands.map((b) => (b?.value || "").toLowerCase());
    const productValues = products.map((p) => (p?.value || "").toLowerCase());
    const stateValues = states.map((s) => (s?.value || "").toLowerCase());

    return (
      (!keyword || item.title?.toLowerCase().includes(keyword.toLowerCase())) &&
      (!category || item.title?.toLowerCase().includes(category.toLowerCase())) &&
      (!brand || item.title?.toLowerCase().includes(brand.toLowerCase())) &&
      (!yearMin || item.year >= parseInt(yearMin)) &&
      (!yearMax || item.year <= parseInt(yearMax)) &&
      (!minPrice || item.price >= parseFloat(minPrice)) &&
      (!maxPrice || item.price <= parseFloat(maxPrice)) &&
      (!bodyType || item.bodyType === bodyType) &&
      (!isFeatured || item.isFeatured) &&
      (!isNew || item.isNew) &&
      (brandValues.length === 0 || brandValues.includes(item.brand?.toLowerCase() || "")) &&
      (productValues.length === 0 || productValues.includes(item.product?.toLowerCase() || "")) &&
      (stateValues.length === 0 || stateValues.includes(item.location?.toLowerCase() || ""))
    );
  });


  // Load more items when scrolling to bottom
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setVisibleItems((prev) => prev + 10);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
    <div className="equipment-page bg-light py-4">
      <Container fluid>
        <Row>
          {/* Sidebar Filters */}

          <Col lg={3} className="mb-4">
            <h4 className="mb-4 border-bottom pb-2  ">Filters</h4>

            <div className="filter-panel shadow p-4 bg-white rounded-4">

              <div className="filter-section">
                <Form.Label className="filter-label">Budget (₹)</Form.Label>
                <Form.Range
                  min={0}
                  max={1000000}
                  step={10000}
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <div className="range-display">Min: ₹{filters.minPrice || 0}</div>
                <Form.Range
                  min={0}
                  max={1000000}
                  step={10000}
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
                <div className="range-display">Max: ₹{filters.maxPrice || 0}</div>
              </div>

              <div className="filter-section">
                <Form.Label className="filter-label">Make & Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search brand or model"
                  name="brand"
                  value={filters.brand}
                  onChange={handleFilterChange}
                />
              </div>

              <div className="filter-section">
                <Form.Label className="filter-label">Model Year</Form.Label>
                <Form.Select
                  name="yearMin"
                  value={filters.yearMin}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  {Array.from({ length: new Date().getFullYear() - 1947 + 1 }, (_, i) => 1947 + i).map((yr) => (
                    <option key={yr} value={yr}>{yr}</option>
                  ))}
                </Form.Select>
              </div>

              <div className="filter-section">
                <Form.Label className="filter-label">Product Name</Form.Label>
                <Select
                  isMulti
                  options={productOptions}
                  value={filters.products}
                  onChange={(selected) => setFilters(prev => ({ ...prev, products: selected }))}
                />
              </div>

              <div className="filter-section">
                <Form.Label className="filter-label">Location</Form.Label>
                <Select
                  isMulti
                  options={stateOptions}
                  value={filters.states}
                  onChange={(selected) => setFilters(prev => ({ ...prev, states: selected }))}
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <Button variant="primary">Apply Filters</Button>
                <Button
                  variant="outline-danger"
                  onClick={() => setFilters({
                    keyword: "",
                    category: "",
                    brand: "",
                    yearMin: "",
                    yearMax: "",
                    minPrice: "",
                    maxPrice: "",
                    kmsMin: "",
                    kmsMax: "",
                    fuel: "",
                    bodyType: "",
                    transmission: "",
                    color: "",
                    features: "",
                    seats: "",
                    location: "",
                    isFeatured: false,
                    isNew: false,
                    brands: [],
                    products: [],
                    states: [],
                  })}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Col>

          {/* Equipment Listings */}
          <Col lg={9}>
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

            <SearchBar />

            <Row className="g-4">
              {filteredEquipment.slice(0, visibleItems).map((item) => (
                <Col xs={12} sm={6} md={4} key={item.id}>
                  <Card
                    className="equipment-card h-100 border-0 shadow rounded-4 overflow-hidden"
                    style={{ marginTop: '5%' }}
                  >
                    <div className="position-relative">
                      <div className="image-container">
                        <Card.Img
                          variant="top"
                          src={item.image}
                          alt={item.title}
                          className="equipment-img"
                        />
                      </div>
                      {isWishlisted ? (
                        <HeartFill
                          className="position-absolute top-0 end-0 m-2 text-danger fs-5 cursor-pointer"
                          onClick={() => removeFromWishlist(item.id)}
                        />
                      ) : (
                        <Heart
                          className="position-absolute top-0 end-0 m-2 text-danger fs-5 cursor-pointer"
                          onClick={() => addToWishlist(item)}
                        />
                      )}                   </div>

                    <Card.Body className="p-3 d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title
                          className="fs-6 fw-bold text-dark card-title-custom mb-2 text-truncate"
                          title={`${item.year} • ${item.title}`}
                        >
                          {item.year} • {item.title}
                        </Card.Title>
                        <div className="text-muted small d-flex flex-wrap mb-2">
                          <span className="me-3">
                            <i className="bi bi-droplet me-1"></i> {item.fuel}
                          </span>
                          <span className="me-3">
                            <i className="bi bi-gear me-1"></i> {item.transmission}
                          </span>
                          <span>
                            <i className="bi bi-person me-1"></i> {item.owner}
                          </span>
                        </div>
                        <div className="fs-5 fw-semibold text-primary">
                          ₹{item.price.toLocaleString()}
                        </div>
                        <div className="text-muted small">{item.location}</div>
                        {item.numberPlate && (
                          <div className="small text-muted mt-1">
                            <strong>Plate:</strong> {item.numberPlate}
                          </div>
                        )}
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        className="mt-3 w-100 fw-semibold text-dark rounded-pill"
                        onClick={() => handleShow()}
                      >
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>

      <BuyNowModal show={showBuyNow} handleClose={handleClose} />
    </div>
  );
};

export default MarketPlacePage;
