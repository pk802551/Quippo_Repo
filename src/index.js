import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App"
import "../src/assets/css/global.css"
import { WishlistProvider } from './assets/WishlistContext/WishlistContext'; // ✅ correct path


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
      <WishlistProvider>

    <App />
      </WishlistProvider>

  </React.StrictMode>,
)
