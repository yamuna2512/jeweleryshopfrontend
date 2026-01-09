// import axios from "axios";

// export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// export const fetchProductsAction = (products) => ({
//   type: FETCH_PRODUCTS,
//   payload: products,
// });

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/products/");
//       dispatch(fetchProductsAction(response.data));
//     } catch (error) {
//       console.error("Fetch products failed", error);
//     }
//   };
// };


import API from "../../API"; // or "../../api" depending on your filename

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProductsAction = (products) => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const api = new API();             // create API instance
      const response = await api.getProducts(); // use API class method
      dispatch(fetchProductsAction(response));
    } catch (error) {
      console.error("Fetch products failed", error);
    }
  };
};
