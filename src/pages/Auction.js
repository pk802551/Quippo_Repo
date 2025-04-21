import "./Auction.css"

const AuctionPage = () => {
  const auctions = [
    {
      id: 1,
      title: "CAT Excavator 320D",
      image: require("../assets/image/twocat.jpeg"),
      currentBid: "$75,000",
      endsIn: "2 days",
      description: "Well-maintained CAT Excavator with low hours. Perfect for construction projects.",
    },
    {
      id: 2,
      title: "JCB Backhoe Loader",
      image: require("../assets/image/newJcb.webp"),
      currentBid: "$45,000",
      endsIn: "5 hours",
      description: "Versatile JCB Backhoe Loader in excellent condition. Ready for immediate use.",
    },
    {
      id: 3,
      title: "Volvo Wheel Loader",
      image: require("../assets/image/wheel-loader.png"),
      currentBid: "$65,000",
      endsIn: "3 days",
      description: "Powerful Volvo Wheel Loader with all maintenance records. Low fuel consumption.",
    },
    {
      id: 4,
      title: "Komatsu Bulldozer",
      image: require("../assets/image/komatsu.webp"),
      currentBid: "$85,000",
      endsIn: "1 day",
      description: "Heavy-duty Komatsu Bulldozer. Ideal for large earthmoving projects.",
    },
  ]

  return (
    <div className="auction-page">
      <div className="page-header">
        <h1>Live Auctions</h1>
        <p>Bid on quality equipment from verified sellers</p>
      </div>

      <div className="auction-filters">
        <select className="form-control">
          <option>Sort By: Ending Soon</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="auction-list">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-item">
            <div className="auction-image">
              <img src={auction.image || "/placeholder.svg"} alt={auction.title} />
            </div>
            <div className="auction-details">
              <h2>{auction.title}</h2>
              <p className="auction-description">{auction.description}</p>
              <div className="auction-meta">
                <div className="bid-info">
                  <p>Current Bid</p>
                  <p className="bid-amount">{auction.currentBid}</p>
                </div>
                <div className="time-info">
                  <p>Ends In</p>
                  <p className="time-remaining">{auction.endsIn}</p>
                </div>
              </div>
              <button className="bid-button">Place Bid</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AuctionPage
