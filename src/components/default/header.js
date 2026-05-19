


import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaHome,
  FaInfoCircle,
  FaGem,
  FaEnvelope,
} from "react-icons/fa";

import "../../assets/styles/headerfooter.css";

import { fetchWishlist } from "../../reducks/wishlist/operations";
import { getWishlistCount } from "../../reducks/wishlist/selectors";

import {
  isUserSignedIn,
  getUserFirstName,
} from "../../reducks/users/selectors";

import { signOut } from "../../reducks/users/operations";

import { fetchProducts } from "../../reducks/product/operations";

/* IMPORTANT */
import { fetchCarts } from "../../reducks/cart/operations";

const Header = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  /* ---------------- USER ---------------- */

  const isSignedIn = useSelector(isUserSignedIn);
  const firstName = useSelector(getUserFirstName);

  /* ---------------- WISHLIST ---------------- */

  const wishlistCount = useSelector(getWishlistCount);

  /* ---------------- CART ---------------- */

  

  const cartProducts = useSelector(
    (state) => state.cart?.results || []
  );

  /* Total quantity count */
const cartCount = useSelector(
  (state) => state.cart?.totalCartItems || 0
);

  /* ---------------- SEARCH ---------------- */

  const [search, setSearch] = useState("");

  /* ---------------- FETCH DATA ---------------- */

  useEffect(() => {

    if (isSignedIn) {

      dispatch(fetchWishlist());

      /* FETCH CARTS */
      dispatch(fetchCarts());
    }

  }, [dispatch, isSignedIn]);

  /* ---------------- SIGN OUT ---------------- */

  const handleSignOut = () => {

    dispatch(signOut());

    history.push("/sign-in");
  };

  

  /* ---------------- SEARCH ---------------- */

  const handleSearch = async (e) => {

  e.preventDefault();

  if (!search.trim()) return;

  await dispatch(fetchProducts(search));

  history.push("/homepage");
};

  return (

    <header className="header">

      <div className="header-container">

        {/* ---------------- LOGO ---------------- */}

        <div className="logo">

          <Link to="/">
            Divine Jewels
          </Link>

        </div>

        {/* ---------------- NAVIGATION ---------------- */}

        <nav className="nav-links">

          <Link to="/homepage"
              className={location.pathname === "/homepage" ? "active" : ""} >
            <FaHome className="nav-icon" />
            Home
          </Link>


          <Link to="/collections"
             className={location.pathname === "/collections" ? "active" : ""}>         
            <FaGem className="nav-icon" />
               Collections
          </Link>

          <Link to="/about"
             className={location.pathname === "/about" ? "active" : ""} >
            <FaInfoCircle className="nav-icon" />
            About Us
          </Link>

          <Link to="/contact"
             className={location.pathname === "/contact" ? "active" : ""}>
            <FaEnvelope className="nav-icon" />
            Contact Us
          </Link>

        </nav>

        {/* ---------------- SEARCH BAR ---------------- */}

        <form
          className="search-bar"
          onSubmit={handleSearch}
        >

          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">
            <FaSearch />
          </button>

        </form>

        {/* ---------------- HEADER ICONS ---------------- */}

        <div className="header-icons">

          {/* ---------------- WISHLIST ---------------- */}

          <Link
            to="/wishlist"
            className="wishlist-link"
          >

            <div className="icon-wrapper">

              <FaHeart
                className={
                  wishlistCount > 0 ? "active" : ""
                }
              />

              {wishlistCount > 0 && (

                <span className="wishlist-count">
                  {wishlistCount}
                </span>

              )}

            </div>

          </Link>

          {/* ---------------- CART ---------------- */}

          <Link
            to="/cart"
            className="cart-link"
          >

            <div className="icon-wrapper">

              <FaShoppingCart />

              {cartCount > 0 && (

                <span className="cart-count">
                  {cartCount}
                </span>

              )}

            </div>

          </Link>

          {/* ---------------- AUTH ---------------- */}

          {isSignedIn ? (

            <div className="user-section">

              <span className="user-name">
                Hello, {firstName}
              </span>

              <button
                className="logout-btn"
                onClick={handleSignOut}
              >
                Sign Out
              </button>

            </div>

          ) : (

            <div className="auth-links">

              <Link to="/sign-in">
                Access Account
              </Link>

              <Link to="/sign-up">
                Sign Up
              </Link>

            </div>

          )}

        </div>

      </div>

    </header>
  );
};

export default Header;