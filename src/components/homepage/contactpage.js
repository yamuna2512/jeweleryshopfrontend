import React from "react";
import Header from "../default/header";
import Footer from "../default/footer";
import "../../assets/styles/contact.css";

const ContactPage = () => {
  return (
    <>
      {/* <Header /> */}

      {/* Banner */}
      <div className="contact-banner"></div>

      {/* Contact Section */}
      <div className="contact-container">

        <div className="contact-left">
          <h1>Connect with us</h1>
          <p>
            We’re here to assist you with any inquiries, styling advice,
            or custom jewelry requests. Let us help you find the perfect piece.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> support@jewelshop.com</p>
            <p><strong>Phone:</strong> +973 1234 5678</p>
            <p><strong>Location:</strong> Karnatak, India</p>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
};

export default ContactPage;