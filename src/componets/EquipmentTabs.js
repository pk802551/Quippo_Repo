import { Link } from "react-router-dom"
import { Card, Badge } from "react-bootstrap"
import { GeoAlt, Calendar, Speedometer } from "react-bootstrap-icons"
import "./EquipmentTab.css"

const EquipmentCard = ({ equipment }) => {
  const { id, title, price, location, year, hours, image, isNew, isFeatured } = equipment

  return (
    <Card className="equipment-card">
      {isFeatured && <Badge className="featured-badge">Featured</Badge>}
      <div className="equipment-image-container">
        <Link to={`/product/${id}`}>
          <Card.Img variant="top" src={image} className="equipment-image" />
        </Link>
        <Badge className={`condition-badge ${isNew ? "new" : "used"}`}>{isNew ? "New" : "Used"}</Badge>
      </div>
      <Card.Body>
        <Card.Title className="equipment-title">
          <Link to={`/product/${id}`}>{title}</Link>
        </Card.Title>
        <div className="equipment-price">${price.toLocaleString()}</div>
        <div className="equipment-details">
          <div className="detail-item">
            <GeoAlt size={14} />
            <span>{location}</span>
          </div>
          <div className="detail-item">
            <Calendar size={14} />
            <span>{year}</span>
          </div>
          {hours && (
            <div className="detail-item">
              <Speedometer size={14} />
              <span>{hours.toLocaleString()} hrs</span>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default EquipmentCard
