




import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signin.css";
import { FaGem } from "react-icons/fa";

const SignInLink = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
}) => {
  return (
    <div className="auth-main">
       <div className="auth-container">

      {/* LEFT SIDE IMAGE */}
      <div className="auth-left">
        <div className="overlay-text">
          <h1>Divine Jewels</h1>
          <p>Jewelry that tells your story</p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="auth-right">
        <div className="auth-card">
          
          {/* <h1 className="logo">💎 JEWELRY</h1> */}
         <h1 className="logo">
  <FaGem className="diamond-icon" />
  JEWELRY
</h1>
          <h2 className="title">Welcome Back</h2>

          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="forgot">Forgot password?</p>

            {/* <button type="submit" className="signin-btn">
              Sign In
            </button> */}
  
            <button
                type="button"
                className="signin-btn"
                onClick={onSubmit}
>
                Sign In
                </button>
        </form>

          <div className="auth-footer">
            <p>
              New user? <Link to="/sign-up">Register here</Link>
            </p>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default SignInLink;