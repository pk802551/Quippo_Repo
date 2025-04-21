"use client"

import { useState } from "react"
import "./Sell.css"

const SellPage = () => {
  const [formData, setFormData] = useState({
    equipmentType: "",
    brand: "",
    model: "",
    year: "",
    condition: "",
    price: "",
    description: "",
    images: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageUpload = (e) => {
    // Handle image upload logic
    console.log("Files selected:", e.target.files)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Submit form data to backend
  }

  return (
    <div className="sell-page">
      <div className="page-header">
        <h1>Sell Your Equipment</h1>
        <p>List your equipment for sale or auction</p>
      </div>

      <div className="sell-options">
        <div className="option-card">
          <h3>Direct Sale</h3>
          <p>List your equipment with a fixed price</p>
          <button className="option-btn">Choose</button>
        </div>

        <div className="option-card">
          <h3>Auction</h3>
          <p>Let buyers bid on your equipment</p>
          <button className="option-btn">Choose</button>
        </div>
      </div>

      <form className="sell-form" onSubmit={handleSubmit}>
        <h2>Equipment Details</h2>

        <div className="form-group">
          <label>Equipment Type</label>
          <select
            name="equipmentType"
            value={formData.equipmentType}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Type</option>
            <option value="excavator">Excavator</option>
            <option value="backhoe">Backhoe Loader</option>
            <option value="bulldozer">Bulldozer</option>
            <option value="wheel-loader">Wheel Loader</option>
            <option value="truck">Truck</option>
            <option value="tipper">Tipper</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label>Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Price (USD)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Upload Images</label>
          <div className="image-upload-container">
            <input type="file" onChange={handleImageUpload} multiple accept="image/*" className="image-upload" />
            <div className="upload-placeholder">
              <span>+ Add Photos</span>
              <p>Upload up to 10 images</p>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          List Equipment
        </button>
      </form>
    </div>
  )
}

export default SellPage
