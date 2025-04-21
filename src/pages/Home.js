import React, { useRef } from "react"
import AuctionSection from "../componets/AuctionSection"
import PromoBanner from "../componets/Banner"
import CategoryGrid from "../componets/categoryGrid"
import SearchBar from "../componets/SearchBar"
import ValuedOEMs from "../pages/valuesOme"
import TrendingLoanSchemes from "./TrendingLoan"
import ValuedPartner from "./valuedPartner"
import "./Home.css"

const HomePage = () => {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log("Uploaded Excel File:", file.name)
      // You can process the Excel file here using xlsx or backend upload
    }
  }

  return (
    <main className="home-page">
      <SearchBar />
 <PromoBanner />
      <CategoryGrid />
       {/* Upload Excel Button */}
       <div className="upload-excel-container">
        <button
          className="upload-btn"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Excel File
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".xls,.xlsx"
          style={{ display: "none" }}
        />
      </div>
      <AuctionSection />
      <ValuedPartner />
      <TrendingLoanSchemes />
      
      <ValuedOEMs />
    </main>
  )
}

export default HomePage
