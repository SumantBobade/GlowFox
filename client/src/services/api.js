import axios from "axios";

const api = axios.create({
  baseURL: "https://glowfox.onrender.com",
  withCredentials: true, // 🔴 REQUIRED
});

export default api;
