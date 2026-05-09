import API from "../../API"; // Adjust path to your API.js
import {
  addCartAction,
  clearCartsAction,
  fetchCartsAction,
  removeCartAction,
  updateCartAction,
} from "./actions";

const api = new API();

// Fetch all carts
export const fetchCarts = () => {
  return (dispatch, getState) => {
    // Check if user is signed in before making the request
    const state = getState();
    if (!state.users?.token) {
      console.warn("User not authenticated - skipping cart fetch");
      return Promise.resolve();
    }

    return api.getCartItems().then((carts) => {
      dispatch(fetchCartsAction(carts));
    }).catch((error) => {
      console.error("FETCH CARTS ERROR:", error);
    });
  };
};

// Add to cart
export const addCart = (addCartBody) => {
  return (dispatch, getState) => {
    // Check if user is signed in
    const state = getState();
    if (!state.users?.token) {
      alert("Please sign in to add items to your cart");
      return Promise.reject(new Error("User not authenticated"));
    }

    return api.addToCart(addCartBody).then((cart) => {
      console.log("Cart API Response:", cart);
      dispatch(addCartAction(cart));
      return cart;
    }).catch((error) => {
      console.error("ADD TO CART ERROR:", error);
      console.error("Response:", error.response?.data);
      throw error;
    });
  };
};

// Update cart
export const updateCart = (updateCartBody, cartId) => {
  return (dispatch, getState) => {
    // Check if user is signed in
    const state = getState();
    if (!state.users?.token) {
      console.warn("User not authenticated - skipping cart update");
      return Promise.reject(new Error("User not authenticated"));
    }

    return api.updateCart(updateCartBody, cartId).then((cart) => {
      dispatch(updateCartAction(cart));
    });
  };
};

// Remove cart
export const removeCart = (cartId) => {
  return (dispatch) => {
    dispatch(removeCartAction(cartId));
  };
};

// Clear all carts
export const clearCarts = () => {
  return (dispatch) => {
    dispatch(clearCartsAction());
  };
};

// ========================
// 🛒 ADD TO CART (USED IN PRODUCT CARD)
// ========================
export const addToCart = (productId) => {
  return async (dispatch, getState) => {
    try {
      // Check if user is signed in
      const state = getState();
      if (!state.users?.token) {
        alert("Please sign in to add items to your cart");
        return;
      }

      const body = {
        product_id: productId,
        quantity: 1,
      };

      const cart = await api.addToCart(body);

      dispatch(addCartAction(cart));
    } catch (error) {
      console.error("ADD TO CART ERROR:", error);
    }
  };
};


export const removeFromCart = (productId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();

      const cartItem = state.cart.items.find(
        (item) => item.product.id === productId
      );

      if (!cartItem) return;

      await api.removeCart(cartItem.id);

      dispatch(removeCartAction(cartItem.id));
    } catch (error) {
      console.error("REMOVE CART ERROR:", error);
    }
  };
};