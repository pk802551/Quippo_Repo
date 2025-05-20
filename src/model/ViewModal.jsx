import React, { useState, useEffect } from "react";
import "../model/ViewModal.css";

const ViewProfileModal = ({ isOpen, onClose }) => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
    location: "Ghaziabad"
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) setProfile(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="view-profile-modal-overlay" onClick={onClose}>
      <div className="view-profile-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Edit Profile</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input name="name" value={profile.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input name="phone" value={profile.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input name="location" value={profile.location} onChange={handleChange} />
        </div>

        <div className="modal-buttons">
          <button onClick={onClose} className="btn-cancel">Cancel</button>
          <button onClick={handleSave} className="btn-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileModal;
