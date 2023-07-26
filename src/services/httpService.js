import axios from "axios";
import { parseCookies } from "nookies";
import setTokens from "@/utils/setTokens";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
const { accessToken, refreshToken } = parseCookies();

const app = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const { data } = await axios.post(`${baseURL}/token/refresh`, {
          refresh: refreshToken,
        });

        if (data) {
          setTokens(data.access);
          return app(originalConfig);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
};

export default http;
