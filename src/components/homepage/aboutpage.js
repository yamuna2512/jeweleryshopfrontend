
import React from "react";
import "../../assets/styles/about.css";
import aboutImg from "../../assets/images/img5.png"; 
import { Link } from "react-router-dom";

const AboutPage = () => {


  return (
    <div className="about-container">

      {/* LEFT SIDE IMAGE */}
      <div className="about-left">
        <img src={aboutImg} alt="Jewelry" />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="about-right">
        <h1 className="about-title">About Us</h1>

        <h3>Our Commitment to You</h3>

        <p>
          At our brand, jewelry is more than an accessory — it is a reflection of elegance, identity, and timeless beauty.
          We specialize in crafting exquisite pieces that blend tradition with contemporary design,
          offering collections that celebrate every moment of life.
        </p>

        <p>
         Each creation is thoughtfully designed with precision and passion, using high-quality materials to ensure lasting brilliance and sophistication.
         From delicate everyday wear to statement pieces, our jewelry is made to enhance your style with a touch of luxury.
        </p>

        <p>
          We believe in creating more than just jewelry — we create experiences, memories, and expressions of individuality.
          Our commitment to craftsmanship, quality, and customer satisfaction is at the heart of everything we do.
        </p>

        <p>
          Discover a world where elegance meets artistry, and let every piece tell your story.
        </p>

        {/* <button className="about-btn">Explore Collection</button> */}
<Link to="/collections" className="about-link">
  <button className="about-btn">
    Explore Collection
  </button>
</Link>
      </div>

    </div>
  );
};

export default AboutPage;