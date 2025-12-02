import axios from "axios";
// require('dotenv').config()

export const LOGIN_USER_KEY = "HIVE_TECHWEAR_LOGIN_USER_KEY";
// const { REACT_APP_ENVIRONMENT, REACT_APP_API_BASE_URL_PROD, REACT_APP_API_BASE_URL_DEV } = process.env;

  const baseURL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TOKEN HANDLING

api.interceptors.request.use(
  (config) => {
    if (config.requireToken) {
      const user = localStorage.getItem(LOGIN_USER_KEY)
        ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY))
        : null;
      if (user?.token) {
        config.headers.common["Authorization"] = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (err) => console.error(err)
);

// RESPONSE HANDLER

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

// USER SIGNUP
  signUp = async (signUpBody) => {
    const formData = new FormData();
    Object.keys(signUpBody).forEach((key) =>
      formData.append(key, signUpBody[key])
    );

    // FIX 2: Correct endpoint
    return api.post("/users/signup/", formData);
  };


   // USER LOGIN
  signIn = async (signInBody) => {
    const formData = new FormData();
    Object.keys(signInBody).forEach((key) =>
      formData.append(key, signInBody[key])
    );

    // FIX 2: Correct endpoint
    return api.post("/users/signin/", formData);
  };
const BASE_URL = "http://127.0.0.1:8000/products/";

export async function fetchCategories() {
  const res = await fetch(BASE_URL + "categories/");
  if (!res.ok) throw new Error("Failed to load categories");
  return res.json();
}

export async function fetchProducts() {
  const res = await fetch(BASE_URL + "products/");
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}