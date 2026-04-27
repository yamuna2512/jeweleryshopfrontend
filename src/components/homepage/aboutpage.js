// import React from "react";
// import Slider from "react-slick";
// import "../../assets/styles/about.css";
// import img1 from "../../assets/images/img1.png";
// import img2 from "../../assets/images/img2.png";
// import img3 from "../../assets/images/img3.png";
// import img4 from "../../assets/images/img4.png";


// // IMPORTANT (slider styles)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // Custom Arrows
// const NextArrow = ({ onClick }) => {
//   return (
//     <div className="arrow next" onClick={onClick}>
//       →
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div className="arrow prev" onClick={onClick}>
//       ←
//     </div>
//   );
// };
// const AboutPage = () => {

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,

//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } }
//     ]
//   };

//   return (
//     <>

//       <div className="about-container">
//         <div className="about-top">
//           <div className="about-title">
//             <h1>About</h1>
//             <h1>Us</h1>
//           </div>

//           <div className="about-content">
//             <h3>Our commitment to you</h3>

//             <div className="about-text">
//                 <p>
//                  We create jewelry that blends modern design with timeless elegance. 
//                  Every piece is crafted to make you feel confident, unique, and effortlessly stylish.
                
//                  Our focus is on quality, sustainability, and attention to
//                  detail—so you can wear every piece with pride and purpose.
//                 </p>
//               {/* <p>Welcome to our brand, where elegance meets style.</p>
//               <p>We focus on quality, sustainability, and design.</p> */}
//             </div>
//           </div>
//         </div>

//         <div className="about-gallery">
//           <h2>Join Our Cult Following</h2>
//           <p className="insta-link">Go to Instagram →</p>

//           <Slider {...settings}>
//             <div><img src={img1} alt="Gallery image 1" /></div>
//             <div><img src={img2} alt="Gallery image 2" /></div>
//             <div><img src={img3} alt="Gallery image 3" /></div>
//             <div><img src={img4} alt="Gallery image 4" /></div>
//           </Slider>
//         </div>
//       </div>

//     </>
//   );
// };

// export default AboutPage;


import React from "react";
import "../../assets/styles/about.css";
import aboutImg from "../../assets/images/img5.png"; // use your image

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

        <button className="about-btn">Explore Collection</button>
      </div>

    </div>
  );
};

export default AboutPage;