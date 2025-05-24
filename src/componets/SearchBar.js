"use client"

import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const params = new URLSearchParams({
      state: "Delhi",
      year: "2024",
      makeName: "TVS MOTORS",
      modelName: "TVS XL SUPER",
      productName: "TWO WHEELER",
      approvedBidMin: "26000",
      approvedBidMax: "27000",
      page: "0",
      size: "10",
    })

    try {
      const response = await fetch(`http://localhost:8080/vehicles/search?${params}`, {
        headers: {
          accept: "/",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setResults(data)
      console.log("Fetched vehicles:", data)
    } catch (err) {
      setError(err.message)
      console.error("API error:", err)
    } finally {
      setLoading(false)
    }
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

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results && (
        <div className="results">
          <h4>Results:</h4>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default SearchBar
