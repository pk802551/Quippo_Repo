import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import HomePage from "./pages/Home"
import AuctionPage from "./pages/Auction"
import SellPage from "./pages/Sell"
import ValuationPage from "./pages/Valuation"
import Header from "./componets/Header"
import Footer from "./componets/Footer"
import CategoryDetail from "./componets/categoryDetail"
import NewEquipmentPage from "./pages/NewEquipment"
import UsedEquipment from "./pages/UsedEquipment"



// Components


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryKey" element={<CategoryDetail />} />
          <Route path="/auction" element={<AuctionPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/new-equipment" element={<NewEquipmentPage />} />
          <Route path="/used-equipment" element={<UsedEquipment />} />
          <Route path="/valuation" element={<ValuationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
