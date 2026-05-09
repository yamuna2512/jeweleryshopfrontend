

import API from "../../API";

const api = new API();

export const fetchWishlist = () => {
  return async (dispatch, getState) => {
    try {
      // Check if user is signed in before making the request
      const state = getState();
      if (!state.users?.token) {
        console.warn("User not authenticated - skipping wishlist fetch");
        return;
      }

      const wishlist = await api.getWishlist();
      dispatch({ type: "FETCH_WISHLIST_SUCCESS", payload: wishlist });
    } catch (error) {
      console.error("FETCH WISHLIST ERROR:", error);
      console.error("Response:", error.response?.data);
    }
  };
};

export const toggleWishlist = (productId) => {
  return async (dispatch, getState) => {
    try {
      // Check if user is signed in
      const state = getState();
      if (!state.users?.token) {
        alert("Please sign in to add items to your wishlist");
        return;
      }

      const wishlist = getState().wishlist.list;
      const existing = wishlist.find((item) => item.product.id === productId);

      if (existing) {
        console.log("Removing from wishlist:", existing.id);
        await api.removeWishlist(existing.id);
      } else {
        console.log("Adding to wishlist:", productId);
        await api.addToWishlist(productId);
      }

      dispatch(fetchWishlist());
    } catch (error) {
      console.error("TOGGLE WISHLIST ERROR:", error);
      console.error("Response:", error.response?.data);
      alert("Error: " + (error.response?.data?.error || error.message));
    }
  };
};
