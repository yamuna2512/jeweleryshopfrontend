// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/default/header";
import Footer from "./components/default/footer";
import RouterConfig from "./router";

import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { fetchWishlist } from "./reducks/wishlist/operations";
import { isUserSignedIn } from "./reducks/users/selectors";

function App() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(isUserSignedIn);

  // Load user from localStorage on app start
  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
  }, [dispatch]);

  // Load wishlist when user is signed in
  useEffect(() => {
    if (isSignedIn) {
      console.log("📋 User signed in, fetching wishlist...");
      dispatch(fetchWishlist());
    }
  }, [dispatch, isSignedIn]);

  return (
    <>
      <Header />
      <RouterConfig />
      <Footer />
    </>
  );
}

export default App;
