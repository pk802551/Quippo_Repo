import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "../model/BuyNowModal.css"

const BuyNowModal = ({ seller = {}, show, handleClose }) => {
  const [step, setStep] = useState('form'); // 'form' or 'seller'
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });

  // Reset modal state when it's closed
  useEffect(() => {
    if (!show) {
      setStep('form');
      setBuyer({
        name: '',
        phone: '',
        email: '',
        location: ''
      });
    }
  }, [show]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, location } = buyer;

    if (!name || !phone || !email || !location) {
      alert('Please fill in all buyer details.');
      return;
    }

    setStep('seller');
  };

  const handleSendSMS = () => {
    alert(`SMS sent to ${seller.phoneNumber} from ${buyer.name}`);
    handleClose(); // Close modal after sending
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop={true} keyboard={true} centered>
      <Modal.Header closeButton>
        <Modal.Title>{step === 'form' ? 'Enter Buyer Details' : 'Seller Information'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {step === 'form' ? (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={buyer.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={buyer.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={buyer.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={buyer.location}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2 w-100">
              Continue
            </Button>
          </Form>
        ) : (
          <>
            <p><strong>Seller Name:</strong> {seller.name || 'N/A'}</p>
            <p><strong>Phone:</strong> {seller.phoneNumber || 'N/A'}</p>
            <p><strong>Email:</strong> {seller.email || 'N/A'}</p>
            <p><strong>Location:</strong> {seller.location || 'N/A'}</p>
            <hr />
            <p><strong>Buyer:</strong> {buyer.name} ({buyer.phone})</p>
          </>
        )}
      </Modal.Body>

      {step === 'seller' && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSendSMS}>
            Send SMS to Seller
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default BuyNowModal;
