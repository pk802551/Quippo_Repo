import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/Home";
import AuctionPage from "./pages/Auction";
import SellPage from "./pages/Sell";
import ValuationPage from "./pages/Valuation";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import CategoryDetail from "./componets/categoryDetail";
import NewEquipmentPage from "./pages/NewEquipment";
import UsedEquipment from "./pages/UsedEquipment";
import LoginPage from "./login/signup/login";
import SignupPage from "./login/signup/signup";
import NotFoundPage from "./login/signup/pageNotFound";
import WishlistPage from "./componets/wishlistPage";


function LayoutWrapper() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/" || location.pathname === "/signupPage";

  return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/category/:categoryKey" element={<CategoryDetail />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/new-equipment" element={<NewEquipmentPage />} />
        <Route path="/used-equipment" element={<UsedEquipment />} />
        <Route path="/valuation" element={<ValuationPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
