// src/services/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://devburger-api.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@codeburger:token"); // Use a chave correta

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
