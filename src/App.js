// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../src/componets/Header"
import Footer from "../src/componets/Footer"
import { useState } from "react"
import AppRoutes from "./Routes/AppRoutes"


function App() {
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false)

  return (
    <Router>
      {!hideHeaderFooter && <Header />}
      <AppRoutes />
      {!hideHeaderFooter && <Footer />}
    </Router>
  )
}

export default App
