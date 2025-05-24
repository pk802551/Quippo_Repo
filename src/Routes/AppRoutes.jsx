// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

// Lazy load each page component
const HomePage = lazy(() => import("../pages/Home"))
const LoginPage = lazy(() => import("../login/signup/login"))
const SignupPage = lazy(() => import("../login/signup/signup"))
const SellPage = lazy(() => import("../pages/Sell"))
const ValuationPage = lazy(() => import("../pages/Valuation"))
const WishlistPage = lazy(() => import("../componets/wishlistPage"))
const NotFoundPage = lazy(() => import("../login/signup/pageNotFound"))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/valuation" element={<ValuationPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
