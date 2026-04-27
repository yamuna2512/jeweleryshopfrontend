import React from "react";
import "../assets/styles/landingpage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import Footer from "../components/default/footer";

// ✅ PRODUCT IMAGES
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

// ✅ SLIDER IMAGES
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

// ✅ landing down IMAGES

import l1 from "../assets/images/l1.png";

// ⚠️ use this if React Router v6
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
          
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <div className="overlay"></div>
              <div className="hero-content">
                <h1>Exquisite Premium Gold Jewelry</h1>
                <p>Elevate Your Elegance with Luxurious Designs</p>
                {/* <button onClick={() => history.push("/homepage")}>
                  🛍️ Shop Now
                </button> */}
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${banner2})` }}
            >
              <div className="overlay"></div>
              <div className="hero-content">
                <h1>Antique Gold Jewelry</h1>
                <p>Timeless Jewelry for Every Occasion</p>
                {/* <button onClick={() => history.push("/homepage")}>
                  Shop Collection
                </button> */}
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${banner3})` }}
            >
              <div className="overlay"></div>
              <div className="hero-content">
                <h1>Luxury Diamond Collection</h1>
                <p>Shine with Elegance</p>
                {/* <button onClick={() => history.push("/homepage")}>
                  Explore Now
                </button> */}
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>✨ Stunning Luxury Collection</h2>

        <div className="product-grid">
          {[
            { name: "Diamond Ring", price: "$149", image: p1 },
            { name: "Gold Bangles", price: "$149", image: p2 },
            { name: "Pendant", price: "$199", image: p3 },
            { name: "Earrings", price: "$129", image: p4 },
          ].map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button onClick={() => history.push("/homepage")}>
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>

    
{/* IMAGE SHOWCASE SECTION */}
<section className="image-showcase">
  <h1 className="showcase-h1">Discover the Art of Luxury Jewelry</h1>
  <div className="showcase-grid">
    
    <div className="showcase-item">
      <img src={l1} alt="jewelry" />
    </div>

    <div className="showcase-item">
      <img src={p2} alt="jewelry" />
    </div>

    <div className="showcase-item">
      <img src={p3} alt="jewelry" />
    </div>

  </div>
</section>

      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;