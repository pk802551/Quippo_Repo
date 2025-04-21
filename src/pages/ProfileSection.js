import "./ProfileSection.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const ProfileModal = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("Buyer/Seller")

  if (!isOpen) return null

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === "Admin" ? "Buyer/Seller" : "Admin"))
  }

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="profile-content">
          <img src={require("../assets/image/profileImage.jpg")} alt="User" className="avatar" />
          <h3 className="username">John Doe</h3>
          <p className="user-email">johndoe@example.com</p>

          <div className="role-toggle">
            <span className="role-label">Role:</span>
            <button className="role-btn" onClick={toggleRole}>
              {role}
            </button>
          </div>

          <div className="profile-actions">
            <Link to="/profile">View Profile</Link>
            <Link to="/settings">Settings</Link>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
