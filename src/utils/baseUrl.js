import axios from "axios";
const request = axios.create({
  baseURL: "https://af-commerce-backend.vercel.app//api/v2",
});
export const backend_url = "https://af-commerce-backend.vercel.app/";
export default request;
