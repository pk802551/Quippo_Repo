import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewProfileModal from "../model/ViewModal";
import axios from "axios"
import { Button } from "react-bootstrap";



const ProfileModal = ({ isOpen, onClose }) => {
  const [showViewProfile, setShowViewProfile] = useState(false);
  const [user, setUser] = useState(null); // Store API user data
  const navigate = useNavigate()

  useEffect(() => {
   const  saveduser =localStorage.getItem("loggedInUser");

   if(saveduser){
const userData =JSON.parse(saveduser)
setUser(userData)
   }

  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${user.userID}`, {
        headers: {
          accept: "*/*",
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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
              <Button
                className="logout-btn"
                variant="danger"
                onClick={() => {
                  localStorage.clear();         // Clear all localStorage
                  navigate("/");       // Redirect to login
                }}
              >
                Logout
              </Button>            </div>
          </div>
        </div>
      </div>

      <ViewProfileModal isOpen={showViewProfile} onClose={() => setShowViewProfile(false)} />
    </>
  );
};

export default ProfileModal;
