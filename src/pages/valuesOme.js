import React from 'react';
import './ValueOME.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const oems = [
  { name: 'Hyundai', logo: require("../assets/image/hyundai.png") },
  { name: 'Kobelco', logo: require("../assets/image/kobelco.png") },
  { name: 'Sany', logo: require("../assets/image/sany.jpg") },
];

const ValuedOEMs = () => {
  return (
    <div className="valued-oems-section container-fluid py-4 px-3">
      <div className="d-flex justify-content-between align-items-center px-2 mb-3">
        <h5 className="text-white fw-bold mb-0">Our Valued OEMs</h5>
        <a href="#" className="text-white text-decoration-underline">View All</a>
      </div>

      <div className="row justify-content-center">
        {oems.map((oem, index) => (
          <div className="col-6 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" key={index}>
            <div className="oem-card p-3">
              <div className="d-flex justify-content-between align-items-start">
                <img src={oem.logo} alt={oem.name} className="img-fluid oem-logo" />
                <img src={require("../assets/image/star.webp")} alt="Star" className="star-badge" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuedOEMs;
