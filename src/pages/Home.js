import React, { useRef, useEffect, useState } from "react"
import MarketPlacePage from "../componets/AuctionSection"
import ValuedOEMs from "../pages/valuesOme"
import TrendingLoanSchemes from "./TrendingLoan"
import ValuedPartner from "./valuedPartner"
import FAQPage from "../componets/FAQ"


const HomePage = () => {
  const fileInputRef = useRef(null)
  const [role, setRole] = useState("")

  useEffect(() => {
    const updateRoleFromStorage = () => {
      const savedRole = localStorage.getItem("userRole")
      setRole(savedRole || "Buyer/Seller")
    }

    updateRoleFromStorage()

    // Listen to storage change from other components
    window.addEventListener("storage", updateRoleFromStorage)

    return () => window.removeEventListener("storage", updateRoleFromStorage)
  }, [])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log("Uploaded Excel File:", file.name)
    }
  }


  console.log("role",role)
  return (
    <main className="home-page">
      {role === "Admin" && (
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
      )}

      <MarketPlacePage />
      <ValuedPartner />
      <TrendingLoanSchemes />
      <ValuedOEMs />
      <FAQPage/>
    </main>
  )
}

export default HomePage
