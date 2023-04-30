import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import nookies from "nookies";

export default function useAxios(context) {
  const baseURL = "http://127.0.0.1:4545";
  const cookies = nookies.get(context);

  const accessToken = cookies.accessToken ? cookies.accessToken : null;
  const refreshToken = cookies.refreshToken ? cookies.refreshToken : null;

  const axiosInstance = axios.create({
    baseURL,
  });

  if (accessToken) {
    axiosInstance.interceptors.request.use(async (req) => {
      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
        console.log("Interceptor ran - Bearer");
      }

      const user = jwtDecode(accessToken);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
      console.log("isExpired", isExpired);
      if (!isExpired) return req;

      axios
        .post(`${baseURL}/token/refresh`, { refresh: refreshToken })
        .then(({ data }) => {
          nookies.set(context, "accessToken", data?.access, {
            path: "/",
            secure: true,
          });

          req.headers.Authorization = `Bearer ${data?.access}`;

          console.log("access token updated");
        })
        .catch((err) => {});

      return req;
    });
  }

  return axiosInstance;
}
