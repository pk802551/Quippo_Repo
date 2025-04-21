import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaGavel, FaTag, FaCalculator } from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/image/NewQuippo.png"; // make sure this path matches your logo

const Footer = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/auction", label: "Auction", icon: <FaGavel /> },
    { path: "/sell", label: "Sell", icon: <FaTag /> },
    { path: "/valuation", label: "Valuation", icon: <FaCalculator /> },
  ];

  return isMobile ? (
    <footer className="mobile-footer">
      {navItems.map(({ path, label, icon }) => (
        <Link
          key={path}
          to={path}
          className={`footer-item ${location.pathname === path ? "active" : ""}`}
        >
          <div className="footer-icon">{icon}</div>
          <span className="footer-label">{label}</span>
        </Link>
      ))}
    </footer>
  ) : (
    <footer className="desktop-footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-logo-column">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p className="footer-description">
              Your trusted platform for buying, selling, and financing construction & farm equipment.
            </p>
          </div>

          <div className="footer-links-column">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new-equipment">New Equipment</Link></li>
            <li><Link to="/used-equipment">Used Equipment</Link></li>
            <li><Link to="/auction">Live Auctions</Link></li>
            <li><Link to="/sell">Sell Equipment</Link></li>
            <li><Link to="/valuation">Valuation</Link></li>
            </ul>
          </div>

          <div className="footer-contact-column">
            <h5>Contact Us</h5>
            <p>Email: support@equipmenthub.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Mumbai, India</p>
          </div>
        </div>

        <hr />
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} EquipmentHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
