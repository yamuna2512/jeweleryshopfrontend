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
    try {
      const user = JSON.parse(raw);
      if (user?.token) {
        // Attach token to Authorization header
        config.headers.Authorization = user.token;
        console.log("ATTACHING TOKEN:", config.headers.Authorization);
      }
    } catch (e) {
      console.error("Error parsing stored user:", e);
      localStorage.removeItem(LOGIN_USER_KEY);
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response?.status === 401) {
      console.error("Unauthorized - Token invalid or expired");
      localStorage.removeItem(LOGIN_USER_KEY);
      // Optionally redirect to login or trigger logout action
      window.location.href = "/sign-in";
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


/* ---------- ORDER ---------- */

createOrder = (data) =>
  api.post("/products/create-order/", data);

getMyOrders = () =>
  api.get("/products/my-orders/");

getOrderDetails = (id) =>
  api.get(`/products/order-details/${id}/`);

cancelOrder = (id) =>
  api.put(`/products/cancel-order/${id}/`);

}