import axios from "axios";

export const LOGIN_USER_KEY = "JEWEL_STORE_USER";

const api = axios.create({
  // baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
  baseURL:'https://jeweleryshopbackend.onrender.com/api',
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem(LOGIN_USER_KEY);

  if (raw) {
    const user = JSON.parse(raw);
    if (user?.token) {
      //  Correct header format for custom authentication
      config.headers.Authorization = user.token;
      console.log("ATTACHING TOKEN:", config.headers.Authorization);
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response?.status === 401) {
      console.error("Unauthorized");
      localStorage.removeItem(LOGIN_USER_KEY);
    }
    return Promise.reject(error);
  }
);

export default class API {
  /* ---------- SIGN IN ---------- */
  signIn = async ({ email, password }) => {
    const res = await api.post("/users/signin/", { email, password });

    localStorage.setItem(
      LOGIN_USER_KEY,
      JSON.stringify({
        id: res.id,
        email: res.email,
        first_name: res.first_name,
        token: res.token,
      })
    );

    return res;
  };

  /* ---------- SIGN UP ---------- */
  signUp = async (data) => api.post("/users/signup/", data);

  /* ---------- PROFILE ---------- */
  getUserProfile = () => api.get("/users/profile/");

  /* ---------- CATEGORY ---------- */
  getCategories = () => api.get("/products/categories/");
  getSubCategories = () => api.get("/products/subcategories/");

  /* ---------- PRODUCTS ---------- */
  getProducts = (params = {}) => api.get("/products/", { params });
  getProductDetail = (id) => api.get(`/products/${id}/`);

  /* ---------- CART ---------- */
  getCartItems = () => api.get("/products/cart/");
  addToCart = (data) => api.post("/products/cart/add/", data);
  updateCart = (data, cartItemId) => api.put(`/products/cart/update/${cartItemId}/`, data);
  removeCartItem = (id) => api.delete(`/products/cart/remove/${id}/`);

  /* ---------- WISHLIST ---------- */
  getWishlist = () => api.get("/products/wishlist/");
  addToWishlist = (productId) =>
    api.post("/products/wishlist/add/", { product_id: productId });
  removeWishlist = (wishlistId) =>
    api.delete(`/products/wishlist/remove/${wishlistId}/`);
}
