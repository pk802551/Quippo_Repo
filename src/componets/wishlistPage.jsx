// WishlistPage.js
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useWishlist } from '../assets/WishlistContext/WishlistContext';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container py-4">
      <h3 className="mb-4">My Wishlist</h3>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <Row className="g-4">
          {wishlist.map((item) => (
            <Col xs={12} sm={6} md={4} key={item.id}>
              <Card className="h-100 border-0 shadow rounded-4">
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold text-dark text-truncate">
                    {item.year} • {item.title}
                  </Card.Title>
                  <div className="text-muted small mb-2">{item.location}</div>
                  <div className="fs-5 fw-semibold text-primary mb-2">
                    ₹{item.price.toLocaleString()}
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
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
