import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import nookies from "nookies";

const baseURL = "http://127.0.0.1:4545";

export default function useAxios(context) {
  const cookies = nookies.get(context);
  const accessToken = cookies.accessToken ?? null;
  const refreshToken = cookies.refreshToken ?? null;

  const axiosInstance = axios.create({ baseURL });

  axiosInstance.interceptors.request.use(async (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log("Interceptor ran - Bearer");
    }

    if (!accessToken) {
      return config;
    }

    const user = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    console.log("isExpired", isExpired);

    if (!isExpired) {
      return config;
    }

    try {
      const { data } = await axios.post(`${baseURL}/token/refresh`, {
        refresh: refreshToken,
      });

      nookies.set(context, "accessToken", data?.access, {
        path: "/",
        secure: true,
      });

      config.headers.Authorization = `Bearer ${data?.access}`;

      console.log("access token updated");
    } catch (err) {
      console.error("Error refreshing access token:", err);
    }

    return config;
  });

  return axiosInstance;
}
