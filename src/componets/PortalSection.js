import "../componets/Portal.css"

const PortalSaleBanner = () => {
  return (
    <div className="portal-sale-banner">
      <div className="banner-content">
        <h2 className="banner-title">
          <span className="buy-from">BUY FROM OUR</span>
          <br />
          <span className="portal-sale">PORTAL SALE</span>
        </h2>

        <div className="banner-features">
          <div className="feature">
            <span className="feature-dot">●</span> Register & Bid
          </div>
          <div className="feature">
            <span className="feature-dot">●</span> Free Bidding
          </div>
          <div className="feature">
            <span className="feature-dot">●</span> Unlimited Bidding
          </div>
        </div>

        <button className="view-inventory-btn">View Inventory</button>
      </div>

      <div className="banner-image">
        <img src="/images/equipment-collage.png" alt="Construction Equipment" />
      </div>
    </div>
  )
}

export default PortalSaleBanner
