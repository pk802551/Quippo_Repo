"use client"

import { useState } from "react"

const ValuationPage = () => {
  const [formData, setFormData] = useState({
    equipmentType: "",
    brand: "",
    model: "",
    year: "",
    condition: "",
    hours: "",
    location: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Valuation requested:", formData)
    // Submit form data to backend
  }

  return (
    <div className="valuation-page">
      <div className="page-header">
        <h1>Equipment Valuation</h1>
        <p>Get a free estimate of your equipment's value</p>
      </div>

      <div className="valuation-info">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Enter Details</h3>
              <p>Provide information about your equipment</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Get Estimate</h3>
              <p>Receive an estimated value range</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Expert Review</h3>
              <p>Optional detailed assessment by our experts</p>
            </div>
          </div>
        </div>
      </div>

      <form className="valuation-form" onSubmit={handleSubmit}>
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

        <div className="form-row">
          <div className="form-group">
            <label>Hours/Mileage</label>
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Get Valuation
        </button>
      </form>
    </div>
  )
}

export default ValuationPage
