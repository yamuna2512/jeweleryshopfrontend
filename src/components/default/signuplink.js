
// import React from "react";
// import { Link } from "react-router-dom";
// import "../../assets/styles/signup.css";

// const SignupLink = ({
//   firstName,
//   lastName,
//   email,
//   password,
//   setFirstName,
//   setLastName,
//   setEmail,
//   setPassword,
//   onSubmit,
// }) => {
//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Create Account</h2>

//         <form onSubmit={onSubmit}>
//           <div className="auth-row">
//             <input
//               type="text"
//               placeholder="First name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />

//             <input
//               type="text"
//               placeholder="Last name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//           </div>

//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Sign Up</button>
//         </form>

//         <div className="auth-footer">
//           <p>
//             Already have an account?{" "}
//             <Link to="/sign-in">Sign In</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupLink;


import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signup.css";

const SignupLink = ({
  firstName,
  lastName,
  email,
  password,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  onSubmit,
}) => {
  return (
    <div className="auth-container">

      {/* LEFT IMAGE SECTION */}

      <div className="auth-left">

        <div className="overlay-text">
          <h1>Divine Jewels</h1>
          <p>
            Luxury jewelry crafted with elegance
          </p>
        </div>

      </div>

      {/* RIGHT FORM SECTION */}

      <div className="auth-right">

        <div className="auth-card">

          <div className="logo">
            💎 JEWELRY
          </div>

          <h2 className="title">
            Join Divine Jewels
          </h2>

          <form onSubmit={onSubmit}>

            <div className="input-group">

              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              className="signin-btn"
            >
              Sign Up
            </button>

          </form>

          <div className="auth-footer">

            <p>
              Already have an account?{" "}
              <Link to="/sign-in">
                <span>Access Account</span>
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SignupLink;