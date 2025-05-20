import { useState } from "react"
import "../componets/filtr.css"

const FilterSidebar = () => {
  const [expanded, setExpanded] = useState({
    budget: true,
    makeModel: true,
    modelYear: false,
    kmDriven: false,
    fuel: false,
    transmission: false,
    owner: false,
  })

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const brands = ["Creta", "NEXON", "City", "MAGNITE", "Grand i10", "Ciaz"]

  return (
    <aside className="filter-sidebar">
      {/* Budget Filter */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("budget")}>Budget</h4>
        {expanded.budget && (
          <div className="budget-range">
            <input type="range" min="100000" max="5000000" step="50000" />
            <div className="range-values">
              <span>₹1,00,000</span>
              <span>₹50,00,000</span>
            </div>
          </div>
        )}
      </div>

      {/* Make & Model */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("makeModel")}>Make & Model</h4>
        {expanded.makeModel && (
          <>
            <input type="text" placeholder="Search a Brand or Model" className="brand-search" />
            <div className="brand-tags">
              {brands.map((brand, index) => (
                <button key={index} className="brand-tag">{brand}</button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Model Year */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("modelYear")}>Model Year</h4>
        {expanded.modelYear && (
          <select className="filter-select">
            <option>Select Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        )}
      </div>

      {/* KM Driven */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("kmDriven")}>Km Driven</h4>
        {expanded.kmDriven && (
          <select className="filter-select">
            <option>Select Range</option>
            <option>&lt; 10,000 km</option>
            <option>10,000 - 30,000 km</option>
            <option>30,000 - 60,000 km</option>
            <option>&gt; 60,000 km</option>
          </select>
        )}
      </div>

      {/* Fuel Type */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("fuel")}>Fuel</h4>
        {expanded.fuel && (
          <div className="checkbox-list">
            {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => (
              <label key={fuel}><input type="checkbox" /> {fuel}</label>
            ))}
          </div>
        )}
      </div>

      {/* Transmission */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("transmission")}>Transmission</h4>
        {expanded.transmission && (
          <div className="checkbox-list">
            {["Manual", "Automatic"].map((type) => (
              <label key={type}><input type="checkbox" /> {type}</label>
            ))}
          </div>
        )}
      </div>

      {/* Owner Type */}
      <div className="filter-group">
        <h4 onClick={() => toggleSection("owner")}>Owner</h4>
        {expanded.owner && (
          <div className="checkbox-list">
            {["1st", "2nd", "3rd", "4th+ Owner"].map((type) => (
              <label key={type}><input type="checkbox" /> {type}</label>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}

export default FilterSidebar
