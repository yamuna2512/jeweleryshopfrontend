import axios from "axios";

export const LOGIN_USER_KEY = "HIVE_TECHWEAR_LOGIN_USER_KEY";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { "Content-Type": "application/json" },
});

/* ----------------------- TOKEN HANDLING ------------------------ */
api.interceptors.request.use(
  (config) => {
    if (config.requireToken) {
      const stored = localStorage.getItem(LOGIN_USER_KEY);
      const user = stored ? JSON.parse(stored) : null;

      if (user?.token) {
        config.headers["Authorization"] = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (err) => Promise.reject(err)
);

/* ---------------------- RESPONSE HANDLER ----------------------- */
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log("API Error:", error);

    if (error.response && error.response.status === 401) {
      localStorage.removeItem(LOGIN_USER_KEY);
    }
    return Promise.reject(error);
  }
);

/* --------------------- AUTH ENDPOINTS -------------------------- */
export const signUp = (body) => {
  const form = new FormData();
  Object.keys(body).forEach((key) => form.append(key, body[key]));

  return api.post("/users/signup/", form);
};

export const signIn = (body) => {
  const form = new FormData();
  Object.keys(body).forEach((key) => form.append(key, body[key]));

  return api.post("/users/signin/", form);
};

/* --------------------- CATEGORY & PRODUCT ---------------------- */
export const getCategories = () => api.get("/categories/");
export const getProducts = () => api.get("/products/");
export const getProduct = (id) => api.get(`/products/${id}/`);

/* --------------------- CART HANDLING --------------------------- */
export const getCart = () =>
  api.get("/cart/", { requireToken: true });

export const addToCart = (product_id, qty = 1) =>
  api.post(
    "/cart/add/",
    { product_id, quantity: qty },
    { requireToken: true }
  );

export const removeFromCart = (item_id) =>
  api.post(
    "/cart/remove/",
    { item_id },
    { requireToken: true }
  );

export default api;
