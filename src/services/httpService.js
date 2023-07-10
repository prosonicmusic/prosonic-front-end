import axios from "axios";
import { parseCookies } from "nookies";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
const { accessToken } = parseCookies();

const app = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
};

export default http;
