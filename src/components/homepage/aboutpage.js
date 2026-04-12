import React from "react";
import Slider from "react-slick";
import "../../assets/styles/about.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";


// IMPORTANT (slider styles)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom Arrows
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      →
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      ←
    </div>
  );
};
const AboutPage = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>

      <div className="about-container">
        <div className="about-top">
          <div className="about-title">
            <h1>About</h1>
            <h1>Us</h1>
          </div>

          <div className="about-content">
            <h3>Our commitment to you</h3>

            <div className="about-text">
                <p>
                 We create jewelry that blends modern design with timeless elegance. 
                 Every piece is crafted to make you feel confident, unique, and effortlessly stylish.
                
                 Our focus is on quality, sustainability, and attention to
                 detail—so you can wear every piece with pride and purpose.
                </p>
              {/* <p>Welcome to our brand, where elegance meets style.</p>
              <p>We focus on quality, sustainability, and design.</p> */}
            </div>
          </div>
        </div>

        <div className="about-gallery">
          <h2>Join Our Cult Following</h2>
          <p className="insta-link">Go to Instagram →</p>

          <Slider {...settings}>
            <div><img src={img1} alt="Gallery image 1" /></div>
            <div><img src={img2} alt="Gallery image 2" /></div>
            <div><img src={img3} alt="Gallery image 3" /></div>
            <div><img src={img4} alt="Gallery image 4" /></div>
          </Slider>
        </div>
      </div>

    </>
  );
};

export default AboutPage;