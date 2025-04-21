import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaUser, FaBars, FaComments } from "react-icons/fa"
import ProfileModal from "../pages/ProfileSection"

import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path

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
              <Link to="/messages" className="icon-button">
                <FaComments className="message-icon" />
              </Link>
              <button className="icon-button" onClick={() => setShowProfile(true)}>
                <FaUser className="user-icon" />
              </button>
            </li>
            <li className={isActive("/") ? "active" : ""}><Link to="/">Market Place</Link></li>
            {/* <li className={isActive("/new-equipment") ? "active" : ""}><Link to="/new-equipment">New Equipment</Link></li> */}
            <li className={isActive("/used-equipment") ? "active" : ""}><Link to="/used-equipment">Used Equipment</Link></li>
            {/* <li className={isActive("/auction") ? "active" : ""}><Link to="/auction">Live Auctions</Link></li>
            <li className={isActive("/sell") ? "active" : ""}><Link to="/sell">Sell Equipment</Link></li>
            <li className={isActive("/valuation") ? "active" : ""}><Link to="/valuation">Valuation</Link></li> */}
          </ul>
        </nav>
      </header>

      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </>
  )
}

export default Header
