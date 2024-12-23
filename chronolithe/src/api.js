import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001", // Adresse de votre backend
});

export default api;
