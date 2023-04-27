import { createContext, useContext, useEffect } from "react";
import Router from "next/router";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import { setCookie, destroyCookie, parseCookies } from "nookies";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();
const cookies = parseCookies();

const baseUrl = "http://localhost:4545";

const initialState = {
  user: null,
  loading: true,
  error: null,
  otp: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { error: null, loading: true, user: null };
    case "SIGNIN_SUCCESS":
      return { error: null, loading: false, user: action.payload };
    case "OTP_SUCCESS":
      return { ...state, error: null, otp: true };
    case "SIGNIN_REJECT":
      return { error: action.error, loading: false, user: null, otp: false };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });

      axios
        .post(`${baseUrl}/user/register`, action.payload)
        .then(({ data }) => {
          toast.success("You have successfully registered");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          window.location.href = "/signin";
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.detail });

          if (err?.response?.data?.detail) {
            toast.error(err?.response?.data?.detail);
          } else {
            toast.error("Something went wrong. Please try again later!");
          }
        });
    },

  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      // loading
      dispatch({ type: "SIGNIN_PENDING" });

      axios
        .post(`${baseUrl}/login`, action.payload)
        .then(({ data }) => {
          if (data.verified) {
            setCookie(null, "accessToken", data?.access, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
              secure: true,
              sameSite: "strict",
            });
            setCookie(null, "refreshToken", data?.refresh, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
              secure: true,
              sameSite: "strict",
            });
            toast.success("You have successfully logged in");
            dispatch({ type: "SIGNIN_SUCCESS", payload: data });
            Router.push("/");
          } else {
            toast.error("Your email address is not verified");
          }
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.detail });
          toast.error(err?.response?.data?.detail);
        });
    },

  UPDATE_TOKEN:
    ({ dispatch }) =>
    (action) => {
      if (cookies) {
        const refresh = cookies.refreshToken;
        axios
          .post(`${baseUrl}/token/refresh`, { refresh: refresh })
          .then(({ data }) => {
            console.log("access token updated");

            setCookie(null, "accessToken", data?.access, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
              secure: true,
              sameSite: "strict",
            });
          })
          .catch((err) => {
            dispatch({ type: "SIGNIN_PENDING" });
            destroyCookie(null, "accessToken");
            destroyCookie(null, "refreshToken");
            window.location.href = "/";
            toast.error("Please login again");
          });
      }
    },

  SET_OTP:
    ({ dispatch }) =>
    (action) => {
      axios
        .post(`${baseUrl}/user/verification/send`, action.payload)
        .then(({ data }) => {
          dispatch({ type: "OTP_SUCCESS" });
          toast.success(data?.message);
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: "Something went wrong, Check your email" });
          toast.error(err?.response?.data?.message);
        });
    },

  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      destroyCookie(null, "accessToken");
      destroyCookie(null, "refreshToken");
      window.location.href = "/";
    },
};

export default function AuthProvider({ children }) {
  const [user, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cookies.accessToken) {
        dispatch({ type: "UPDATE_TOKEN" });
      }
    }, 860000);
    return () => clearInterval(interval);
  }, [user.loading, cookies]);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
