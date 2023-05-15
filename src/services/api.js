import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketnotes-backend-le8e.onrender.com'
});

