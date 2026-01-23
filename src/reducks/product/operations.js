


// import API from "../../API"; // or "../../api" depending on your filename

// export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// export const fetchProductsAction = (products) => ({
//   type: FETCH_PRODUCTS,
//   payload: products,
// });

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       const api = new API();             // create API instance
//       const response = await api.getProducts(); // use API class method
//       dispatch(fetchProductsAction(response));
//     } catch (error) {
//       console.error("Fetch products failed", error);
//     }
//   };
// };


import API from "../../API";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProductsAction = (products) => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

export const fetchProducts = (search = "") => {
  return async (dispatch) => {
    try {
      const api = new API();
      const params = search ? { search } : {};

      // Send query params to backend
      const response = await api.getProducts(params);

      dispatch(fetchProductsAction(response));
    } catch (error) {
      console.error("Fetch products failed:", error);
    }
  };
};
