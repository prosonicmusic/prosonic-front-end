import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import nookies, { setCookie } from "nookies";

export default function axiosInstance(context) {
  const baseURL = "http://127.0.0.1:4545";
  const cookies = nookies.get(context);

  const accessToken = cookies.accessToken ? cookies.accessToken : null;
  const refreshToken = cookies.refreshToken ? cookies.refreshToken : null;

  const axiosClient = axios.create({
    baseURL,
  });

  if (accessToken) {
    axiosClient.interceptors.request.use(async (req) => {
      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
        console.log("Interceptor ran - Bearer");
      }

      const user = jwtDecode(accessToken);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
      console.log("isExpired", isExpired);
      if (!isExpired) return req;

      if (cookies.accessToken) {
        axios
          .post(`${baseURL}/token/refresh`, { refresh: refreshToken })
          .then(({ data }) => {
            nookies.set(context, "accessToken", data?.access, {
              path: "/",
              secure: true,
              httpOnly: true,
            });

            req.headers.Authorization = `Bearer ${accessToken}`;

            console.log("access token updated");
          })
          .catch((err) => {});
      }

      return req;
    });
  }

  return axiosClient;
}
