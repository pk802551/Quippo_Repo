import "./ProfileSection.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewProfileModal from "../model/ViewModal";
import axios from "axios";

const ProfileModal = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("Buyer/Seller");
  const [showViewProfile, setShowViewProfile] = useState(false);
  const [user, setUser] = useState(null); // Store API user data

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) setRole(savedRole);
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users/1", {
        headers: {
          accept: "*/*",
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const toggleRole = () => {
    const newRole = role === "Admin" ? "Buyer/Seller" : "Admin";
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="profile-modal-overlay" onClick={onClose}>
        <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          <div className="profile-content">
            <img
              src={require("../assets/image/profileImage.jpg")}
              alt="User"
              className="avatar"
            />
            <h3 className="username">{user?.userName || "Loading..."}</h3>
            <p className="user-email">{user?.email || ""}</p>

            <div className="role-toggle">
              <span className="role-label">Role:</span>
              <button className="role-btn" onClick={toggleRole}>
                {role}
              </button>
            </div>

            <div className="profile-details">
              <p><strong>Phone:</strong> {user?.phone || "-"}</p>
              <p><strong>Alt Phone:</strong> {user?.alternatePhone || "-"}</p>
              <p><strong>State:</strong> {user?.state || "-"}</p>
              <p><strong>Address:</strong> {user?.address || "-"}</p>
              {/* Avoid showing password directly */}
            </div>

            <div className="profile-actions">
              <button onClick={() => setShowViewProfile(true)}>View Profile</button>
              <Link to="/settings">Settings</Link>
              <button className="logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>

      <ViewProfileModal isOpen={showViewProfile} onClose={() => setShowViewProfile(false)} />
    </>
  );
};

export default ProfileModal;
