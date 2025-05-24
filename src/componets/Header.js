import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaComments, FaMapMarkerAlt } from "react-icons/fa";
import ProfileModal from "../pages/ProfileSection";
import { HeartFill } from 'react-bootstrap-icons';
import { useWishlist } from "../assets/WishlistContext/WishlistContext";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLocation, setShowLocation] = useState(false); // 👈 state for location modal
  const { wishlist } = useWishlist();

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="site-header">
        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <div className="top-header">
              <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars className="menu-icon" />
              </button>
              <div className="logo-container">
                <Link to="/">
                  <img
                    src={require("../assets/image/NewQuippo.png")}
                    alt="Quippo Logo"
                    className="logo"
                  />
                </Link>
              </div>
            </div>

            <li className="nav-icons">
              <button className="icon-button" onClick={() => setShowLocation(true)}>
                <FaMapMarkerAlt className="location-icon" title="Select Location" />
              </button>
              <Link to="/messages" className="icon-button">
                <FaComments className="message-icon" />
              </Link>
              <button className="icon-button" onClick={() => setShowProfile(true)}>
                <FaUser className="user-icon" />
              </button>

              <NavLink to="/wishlist" className="text-decoration-none position-relative">
                <HeartFill className="text-danger fs-4" />
                {wishlist.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {wishlist.length}
                  </span>
                )}
              </NavLink>
            </li>

            <li className={isActive("/") ? "active" : ""}>
              <Link to="/">Market Place</Link>
            </li>
            <li className={isActive("/used-equipment") ? "active" : ""}>
              <Link to="/used-equipment">Used Equipment</Link>
            </li>
          </ul>
        </nav>
      </header>

      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
      {/* <LocationModal isOpen={showLocation} onClose={() => setShowLocation(false)} /> 👈 added */}
    </>
  );
};

export default Header;
