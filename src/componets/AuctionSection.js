import { Link } from "react-router-dom"
import "./AuctionSection.css"

const AuctionSection = () => {
  const auctions = [
    {
      id: 1,
      title: "CAT Excavator 320D",
      image: require("../assets/image/cat.jpeg"),
      currentBid: "$75,000",
      endsIn: "2 days",
    },
    {
      id: 2,
      title: "JCB Backhoe Loader",
      image: require("../assets/image/jcb.jpg"),
      currentBid: "$45,000",
      endsIn: "5 hours",
    },
  ]

  return (
    <section className="auction-section">
      <div className="section-header">
        <h2 className="section-title">Auctions</h2>
        <Link to="/auction" className="view-all-link">
          View All Auctions
        </Link>
      </div>

      <div className="auction-grid">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-card">
            <div className="auction-image">
              <img src={auction.image || "/placeholder.svg"} alt={auction.title} />
            </div>
            <div className="auction-details">
              <h3 className="auction-title">{auction.title}</h3>
              <div className="auction-info">
                <p>
                  Current Bid: <span className="bid-amount">{auction.currentBid}</span>
                </p>
                <p>
                  Ends in: <span className="time-remaining">{auction.endsIn}</span>
                </p>
              </div>
              <Link to={`/auction/${auction.id}`} className="bid-now-btn">
                Bid Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AuctionSection
