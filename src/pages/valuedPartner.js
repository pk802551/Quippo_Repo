import React from 'react';
import './ValuedPartner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ValuedPartner = () => {
  return (
    <div className="valued-partner-section py-4 px-3">
      <h5 className="text-white fw-bold mb-4">Our Valued Partner</h5>
      <div className="partner-card-wrapper d-flex justify-content-center">
        <div className="partner-card bg-white d-flex align-items-center justify-content-center shadow-sm">
          <img
            src={require("../assets/image/superTech.png")}
            alt="Suretech"
            className="img-fluid partner-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ValuedPartner;
