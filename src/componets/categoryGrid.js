import { Link } from "react-router-dom"
import "./categoryGrid.css"

const productData = {
  excavator: [/*...*/],
  tipper: [/*...*/],
  backhoe: [/*...*/],
  truck: [/*...*/],
  "wheel-loader": [/*...*/],
}

const categoryIcons = {
  excavator: require("../assets/image/exvolter.png"),
  tipper: require("../assets/image/Tipper.png"),
  backhoe: require("../assets/image/backheo.png"),
  truck: require("../assets/image/truck.png"),
  "wheel-loader": require("../assets/image/wheel-loader.png"),
//   "view-all": require("../assets/image/view-all-icon.png"), // Add this icon or placeholder
}

const CategoryGrid = () => {
  const categoryKeys = Object.keys(productData)

  return (
    <section className="category-section">
      <h2 className="section-title">Category</h2>
      <div className="category-grid">
        {categoryKeys.map((key, index) => {
          const displayName = key.replace("-", " ").toUpperCase()
          const icon = categoryIcons[key] || "/images/placeholder-icon.png"
          const path = `/category/${key}`

          return (
            <Link to={path} key={index} className="category-card">
              <div className="category-icon-wrapper">
                <img src={icon} alt={displayName} className="category-icon" />
              </div>
              <h3 className="category-name">{displayName}</h3>
            </Link>
          )
        })}

        {/* View All card */}
        <Link to="/categories" className="category-card">
          <div className="category-icon-wrapper">
            <img src={categoryIcons["view-all"]} alt="View All" className="category-icon" />
          </div>
          <h3 className="category-name">VIEW ALL</h3>
        </Link>
      </div>
    </section>
  )
}

export default CategoryGrid
