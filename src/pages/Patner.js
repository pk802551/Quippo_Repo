import React from 'react';
import './patner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const oems = [
  { name: 'Caterpillar', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Caterpillar_logo.svg' },
  { name: 'Komatsu', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Komatsu_logo.svg' },
  { name: 'JCB', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/JCB_logo.svg' },
  { name: 'Volvo CE', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Volvo_logo.svg' },
];

const partners = [
  { name: 'Tata Capital', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Tata_logo.svg' },
  { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/HDFC_Bank_Logo.svg' },
  { name: 'Mahindra Finance', logo: 'https://upload.wikimedia.org/wikipedia/en/7/77/Mahindra_Finance_logo.png' },
  { name: 'Bajaj Finserv', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Bajaj_Finserv_logo.svg' },
];

const ValuedPartners = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 section-title">Our Valued OEMs</h2>
      <div className="row justify-content-center">
        {oems.map((oem, index) => (
          <div className="col-6 col-md-3 mb-4 text-center" key={index}>
            <div className="partner-card">
              <img src={oem.logo} alt={oem.name} className="img-fluid partner-logo" />
              <p className="partner-name">{oem.name}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mb-4 section-title">Our Valued Partners</h2>
      <div className="row justify-content-center">
        {partners.map((partner, index) => (
          <div className="col-6 col-md-3 mb-4 text-center" key={index}>
            <div className="partner-card">
              <img src={partner.logo} alt={partner.name} className="img-fluid partner-logo" />
              <p className="partner-name">{partner.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuedPartners;
