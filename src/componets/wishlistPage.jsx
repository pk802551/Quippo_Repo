import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId"); // Ensure userId is stored in localStorage

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/wishlist/${userId}`);
        const wishlistItems = Array.isArray(response.data) ? response.data : [response.data];

        // Optionally fetch full vehicle data here if your API doesn't include it
        const vehicleDetails = await Promise.all(
          wishlistItems.map(async (item) => {
            const vehicleRes = await axios.get(`http://localhost:8080/vehicles/${item.vehicleId}`);
            return { ...vehicleRes.data, wishlistId: item.id }; // Attach wishlist ID for removal
          })
        );

        setWishlist(vehicleDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        toast.error("Failed to load wishlist.");
        setLoading(false);
      }
    };

    if (userId) fetchWishlist();
  }, [userId]);

  const removeFromWishlist = async (wishlistId) => {
    try {
      await axios.delete(`http://localhost:8080/wishlist/${wishlistId}?userId=${userId}`);
      setWishlist((prev) => prev.filter((item) => item.wishlistId !== wishlistId));
      toast.success("Item removed from wishlist");
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      toast.error("Failed to remove item.");
    }
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">My Wishlist</h3>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <Row className="g-4">
          {wishlist.map((item) => (
            <Col xs={12} sm={6} md={4} key={item.vehicleId}>
              <Card className="h-100 border-0 shadow rounded-4">
                <Card.Img variant="top" src={item.image || "/placeholder.jpg"} alt={item.title} />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold text-dark text-truncate">
                    {item.year} • {item.title}
                  </Card.Title>
                  <div className="text-muted small mb-2">{item.location}</div>
                  <div className="fs-5 fw-semibold text-primary mb-2">
                    ₹{parseInt(item.approvedBid).toLocaleString()}
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromWishlist(item.wishlistId)}
                    className="rounded-pill w-100"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default WishlistPage;
