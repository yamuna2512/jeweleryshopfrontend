import React from "react";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Award,
  Headphones,
  Heart,
  Check
} from "lucide-react";

import "../assets/styles/order-success.css";

const OrderSuccess = () => {

  return (

    <div className="luxury-success-page">

      <div className="luxury-success-card">

        {/* TOP ICON */}
        <div className="success-check-circle">
          <Check size={55} strokeWidth={3} />
        </div>

        {/* TITLE */}
        <h3 className="success-small-title">
          ORDER
        </h3>

        <h1 className="success-big-title">
          SUCCESSFULLY
        </h1>

        {/* DECORATION */}
        <div className="luxury-divider">
          <span></span>
          ✦
          <span></span>
        </div>

        {/* THANK YOU */}
        <div className="thank-you-section">

          <div className="bag-icon">
            🛍
          </div>

          <h2>
            THANK YOU
          </h2>

          <p className="thank-text">
            FOR YOUR ORDER AND FOR TRUSTING US.
          </p>

          <div className="mini-line"></div>

          <p className="description">
            Your order has been received successfully.
            <br />
            We will process it with care and keep you
            updated on its progress.
          </p>

        </div>

        {/* HEART */}
        <div className="heart-divider">
          <span></span>
          <Heart size={16} fill="#d8a15d" />
          <span></span>
        </div>

        {/* FEATURES */}
        <div className="luxury-features">

          <div className="feature-box">
            <ShieldCheck size={38} />

            <h4>SECURE PAYMENT</h4>

            <p>100% PROTECTED</p>
          </div>

          <div className="feature-box">
            <Award size={38} />

            <h4>PREMIUM QUALITY</h4>

            <p>GUARANTEED</p>
          </div>

          <div className="feature-box">
            <Headphones size={38} />

            <h4>DEDICATED SUPPORT</h4>

            <p>ALWAYS HERE FOR YOU</p>
          </div>

        </div>

        {/* BUTTON */}
        <Link to="/my-orders">

          <button className="view-orders-btn">
            VIEW MY ORDERS
          </button>

        </Link>

      </div>

    </div>
  );
};

export default OrderSuccess;