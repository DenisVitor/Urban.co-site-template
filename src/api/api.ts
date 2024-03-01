import axios from "axios";

export const api = axios.create({
  baseURL: "https://urban-co-site-template-api.vercel.app/",
  timeout: 9000,
});
