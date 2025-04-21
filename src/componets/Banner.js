import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Banner.css";

const bannerData = [
  {
    image: require("../assets/image/newBanner.jpeg"),
    headlineDark: "BUY FROM OUR",
    headlineRed: "PORTAL",
    headlineBlue: "SALE",
    features: ["Register & Bid", "Free Bidding", "Unlimited Bidding"],
    link: "/inventory",
  },
  {
    image: require("../assets/image/newBannerImage.png"),
    headlineDark: "HEAVY EQUIPMENT",
    headlineRed: "MEGA",
    headlineBlue: "AUCTION",
    features: ["No Registration Fee", "Live Bidding", "Instant Ownership"],
    link: "/inventory",
  },
  {
    image: require("../assets/image/oneNew.png"),
    headlineDark: "YOUR NEXT",
    headlineRed: "MACHINE",
    headlineBlue: "IS HERE",
    features: ["Verified Listings", "Best Prices", "Trusted Vendors"],
    link: "/inventory",
  },
];

const PromoBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings} className="promo-slider">
      {bannerData.map((banner, index) => (
        <div className="promo-banner" key={index}>
          <div className="promo-content">
            <h2 className="promo-title">
              <span className="text-dark">{banner.headlineDark}</span>
              <br />
              <span className="text-red">{banner.headlineRed}</span>{" "}
              <span className="text-blue">{banner.headlineBlue}</span>
            </h2>

            <div className="promo-features">
              {banner.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <span className="feature-dot"></span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>

            <Link to={banner.link} className="view-inventory-btn">
              View Inventory
            </Link>
          </div>

          <div className="promo-image">
            <img src={banner.image} alt="Promo Banner" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PromoBanner;
