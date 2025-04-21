import { useParams } from "react-router-dom"
import "./categoryDetail.css"

const productData = {
  excavator: [
    { id: 1, name: "Volvo EC200D", price: "$80,000", image: require("../assets/image/exvolter.png") },
    { id: 2, name: "Hitachi ZX220LC", price: "$85,000", image: require("../assets/image/exvolter.png") },
  ],
  tipper: [
    { id: 3, name: "Tata 2518", price: "$45,000", image: require("../assets/image/Tipper.png") },
    { id: 4, name: "Ashok Leyland U2518", price: "$50,000", image: require("../assets/image/Tipper.png") },
  ],
  backhoe: [
    { id: 5, name: "JCB 3DX", price: "$35,000", image: require("../assets/image/backheo.png") },
    { id: 6, name: "CAT 426F2", price: "$40,000", image: require("../assets/image/backheo.png") },
  ],
  truck: [
    { id: 7, name: "Eicher Pro 3015", price: "$38,000", image: require("../assets/image/truck.png") },
  ],
  "wheel-loader": [
    { id: 8, name: "CASE 570N", price: "$65,000", image: require("../assets/image/wheel-loader.png") },
  ],
}

const CategoryDetail = () => {
  const { categoryKey } = useParams()
  const products = productData[categoryKey] || []
  const displayName = categoryKey.replace("-", " ").toUpperCase()

  return (
    <section className="category-detail-section">
      <h2 className="category-title">{displayName}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryDetail
