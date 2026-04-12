

import React, { useEffect,  useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaGem, FaEnvelope } from "react-icons/fa";

import "../../assets/styles/headerfooter.css";

import { fetchWishlist } from "../../reducks/wishlist/operations";
import { getWishlistCount } from "../../reducks/wishlist/selectors";
import { isUserSignedIn, getUserFirstName } from "../../reducks/users/selectors";
import { signOut } from "../../reducks/users/operations";
import { fetchProducts } from "../../reducks/product/operations";


const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory(); //  INSIDE component

  const wishlistCount = useSelector(getWishlistCount);
  const isSignedIn = useSelector(isUserSignedIn);
 const firstName = useSelector(getUserFirstName);

 const [search, setSearch] = useState("");

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchWishlist());
    }
  }, [dispatch, isSignedIn]);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/sign-in"); //  redirect after logout
  };

const handleSearch = (e) => {
    e.preventDefault();
      if (!search.trim()) return;   // avoid empty search

    dispatch(fetchProducts( search ));
    console.log("SEARCH CLICKED", search);

   history.push("/", { resetFilters: true }); // go to homepage where products are shown

  };


  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">Divine Jewels</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/"> <FaHome /><span>Home</span></Link>
          <Link to="/"><FaGem /> Collections</Link>
          <Link to="/about"> <FaInfoCircle /> About</Link>
          <Link to="/contact"> <FaEnvelope />Contact</Link>
        </nav>

       {/*  Search Bar */}
        <form className="search-bar" >
          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
             <FaSearch />
          </button>
        </form>


        {/* Icons */}
        <div className="header-icons">

          {/* Wishlist */}
          <Link to="/wishlist" className="wishlist-link">
            <FaHeart className={wishlistCount > 0 ? "active" : ""} />
            {wishlistCount > 0 && (
              <span className="wishlist-count">{wishlistCount}</span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <FaShoppingCart />
          </Link>

          {/* Auth */}
          {isSignedIn ? (
            <>
              <span className="user-name">
                Hello,  {firstName}
              </span>
              <button className="logout-btn" onClick={handleSignOut}>
                Signout
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in">Signin</Link>
              <Link to="/sign-up">Signup</Link>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;
