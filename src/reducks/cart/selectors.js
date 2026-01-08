// import { createSelector } from "reselect";

// const cartsSelector = (state) => state.cart;
// // Selectors for cart
// export const getCarts = (state) => state.cart;

// export const getCartItems = (state) => state.cart.results;

// export const getCartTotal = (state) => state.cart.totalPrice;

// export const getCartCount = (state) => state.cart.totalCartItems;

// Cart base selector
const cartSelector = (state) => state.cart || {
  results: [],
  totalPrice: 0,
  totalCart: 0,
  totalCartItems: 0,
};

// Selectors
export const getCarts = (state) => cartSelector(state).results;

export const getCartItems = (state) => cartSelector(state).results;

export const getCartTotal = (state) => {
  const items = cartSelector(state).results;
  return items.reduce((total, item) => {
    const price = item.product?.price || 0;
    const quantity = item.quantity || 0;
    return total + (price * quantity);
  }, 0).toFixed(2);
};

export const getCartCount = (state) => {
  const items = cartSelector(state).results;
  return items.reduce((count, item) => count + (item.quantity || 0), 0);
};
