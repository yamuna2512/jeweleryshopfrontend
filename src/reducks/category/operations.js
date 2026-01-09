// // src/reducks/category/operations.js
// import axios from "axios";

// // action type
// export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

// // action creator
// export const fetchCategoriesAction = (categories) => ({
//   type: FETCH_CATEGORIES,
//   payload: categories,
// });

// // thunk operation (THIS WAS MISSING)
// export const fetchCategories = () => {
//   return async (dispatch) => {
//     try {
//       //  change URL to match your backend
//       const response = await axios.get("http://127.0.0.1:8000/api/products/categories/");
      
//       dispatch(fetchCategoriesAction(response.data));
//     } catch (error) {
//       console.error("Fetch categories failed", error);
//     }
//   };
// };


// src/reducks/category/operations.js
import API from "../../API"; // adjust the path if needed

// action type
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

// action creator
export const fetchCategoriesAction = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});

// thunk operation
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const api = new API(); // create API instance
      const response = await api.getCategories(); // use API class method

      dispatch(fetchCategoriesAction(response));
    } catch (error) {
      console.error("Fetch categories failed", error);
    }
  };
};