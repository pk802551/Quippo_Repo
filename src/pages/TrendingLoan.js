import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const loanSchemes = [
  {
    bank: 'YES BANK',
    logo: require("../assets/image/yesBank.png"),
    desc: 'Easy Financing on Farm Equipment',
  },
  {
    bank: 'ICICI Bank',
    logo: require("../assets/image/ICICI.png"),
    desc: 'MSME Loan within 2 days/Instant…',
  },
];

const TrendingLoanSchemes = () => {
  return (
    <div className="trending-loan-schemes px-3 py-4">
      <h5 className="fw-bold mb-4">Trending Loan Schemes</h5>

      <div className="d-flex flex-nowrap overflow-auto loan-slider">
        {loanSchemes.map((item, index) => (
          <div className="loan-card shadow-sm me-3" key={index}>
            <img src={item.logo} alt={item.bank} className="loan-logo mb-3" />
            <p className="text-center text-dark">{item.desc}</p>
          </div>
        ))}

        <div className="next-arrow">
          <FaArrowRight />
        </div>
      </div>

      <div className="dots mt-3 text-center">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default TrendingLoanSchemes;
