"use client"

import { useState } from "react"
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./SearchBar.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm)
    // Implement search functionality
  }

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced)
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter three or more characters to pe..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </div>
      </form>

      <button className="advanced-search-toggle" onClick={toggleAdvanced}>
        Advanced Search {showAdvanced ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {showAdvanced && (
        <div className="advanced-search-panel">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Brand</label>
                <select className="form-control">
                  <option>Any Brand</option>
                  <option>Caterpillar</option>
                  <option>JCB</option>
                  <option>Komatsu</option>
                  <option>Volvo</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Year</label>
                <select className="form-control">
                  <option>Any Year</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Price Range</label>
                <select className="form-control">
                  <option>Any Price</option>
                  <option>Under $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000 - $200,000</option>
                  <option>Over $200,000</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-3">Apply Filters</button>
        </div>
      )}
    </div>
  )
}

export default SearchBar
