import axios from "axios";
const request = axios.create({
  baseURL: "https://x-ecommerce-backend.vercel.app/api/v2",
});
export const backend_url = "https://x-ecommerce-backend.vercel.app/";
export default request;
