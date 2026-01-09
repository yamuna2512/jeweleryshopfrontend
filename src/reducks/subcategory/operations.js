// import axios from "axios";

// export const FETCH_SUBCATEGORIES = "FETCH_SUBCATEGORIES";

// export const fetchSubCategoriesAction = (data) => ({
//   type: FETCH_SUBCATEGORIES,
//   payload: data,
// });

// export const fetchSubCategories = () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get(
//        "http://127.0.0.1:8000/api/products/subcategories/"
//       );
//       dispatch(fetchSubCategoriesAction(res.data));
//     } catch (error) {
//       console.error("Subcategory fetch failed", error);
//     }
//   };
// };


import API from "../../API"; // adjust path according to your project structure

export const FETCH_SUBCATEGORIES = "FETCH_SUBCATEGORIES";

export const fetchSubCategoriesAction = (data) => ({
  type: FETCH_SUBCATEGORIES,
  payload: data,
});

export const fetchSubCategories = () => {
  return async (dispatch) => {
    try {
      const api = new API();                 // create API instance
      const res = await api.getSubCategories(); // use API class method
      dispatch(fetchSubCategoriesAction(res));
    } catch (error) {
      console.error("Subcategory fetch failed", error);
    }
  };
};
