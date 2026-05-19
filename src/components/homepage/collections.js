import React from "react";
import "../../assets/styles/collections.css";
import Header from "../default/header";
import Footer from "../default/footer";
import col1 from "../../assets/images/col1.jpg";
import col2 from "../../assets/images/col2.jpg";
import col3 from "../../assets/images/col3.jpg";
import col4 from "../../assets/images/col4.jpg";
import col5 from "../../assets/images/col5.jpg";
import col6 from "../../assets/images/col6.jpg";

const collections = [
  {
    title: "Timeless Classics",
    desc: "Elegant designs that never go out of style.",
    img: col1,
  },
  {
    title: "Everyday Essentials",
    desc: "Minimal, versatile pieces for every day.",
    img: col2,
  },
  {
    title: "Modern Elegance",
    desc: "Contemporary designs with a refined touch.",
    img: col3,
  },
  {
    title: "Statement Pieces",
    desc: "Bold designs that stand out.",
    img: col4,
  },
  {
    title: "Colored Gemstones",
    desc: "Vibrant gems that tell your story.",
    img: col5,
  },
  {
    title: "Gifts & Moments",
    desc: "Perfect pieces for special occasions.",
    img: col6,
  },
];

const Collections = () => {
  return (
    <div className="collections-page">

      {/* HERO SECTION */}
      <div className="collections-hero1">
        <div className="hero-content1">
          <h1>Explore Our Collections</h1>
          <p>
            Discover handcrafted jewelry designed to celebrate every moment.
          </p>
        </div>
      </div>

      {/* COLLECTION GRID */}
      <div className="collections-grid">
        {collections.map((item, index) => (
          <div className="collection-card" key={index}>
            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {/* <button>Shop Now →</button> */}
              
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Collections;