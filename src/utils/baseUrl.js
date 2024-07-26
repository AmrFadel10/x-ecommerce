import axios from "axios";
const request = axios.create({ baseURL: "http://localhost:8000/api/v2" });
export const backend_url = "http://localhost:8000";
export default request;
