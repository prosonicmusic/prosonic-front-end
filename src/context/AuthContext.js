import { createContext, useContext, useEffect } from "react";
import Router from "next/router";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import { destroyCookie, parseCookies } from "nookies";

import setTokens from "../utils/setTokens";
import routerPush from "../utils/routerPush";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();
const cookies = parseCookies();

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const initialState = {
  user: null,
  loading: true,
  error: null,
  otp: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { ...state, error: null, loading: true, user: null, otp: null };
    case "SIGNIN_SUCCESS":
      return { ...state, error: null, loading: false, user: action.payload };
    case "OTP_SUCCESS":
      return { ...state, error: null, otp: action.payload || null };
    case "TOKEN_SUCCESS":
      return { ...state, token: action.payload };
    case "SIGNIN_REJECT":
      return { error: action.error, loading: false, user: null, otp: false };
    default:
      return { ...state };
  }
};

const authHandlers = {
  SIGNUP:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });

      try {
        const { data } = await axios.post(`${baseUrl}/user/register`, action.payload);
        toast.success("You have successfully registered");
        window.location.href = "/signin";
      } catch (err) {
        dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.detail });
        const { detail } = err?.response?.data || {};

        if (detail) {
          toast.error(detail);
        } else {
          toast.error("Something went wrong. Please try again later!");
        }
      }
    },

  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      // loading
      dispatch({ type: "SIGNIN_PENDING" });

      const successAction = () => {
        toast.success("You have successfully logged in");
        Router.back();
      };

      const failureAction = (error) => {
        dispatch({ type: "SIGNIN_REJECT", error });
        toast.error(error);
      };

      axios
        .post(`${baseUrl}/login`, action.payload)
        .then(({ data }) => {
          if (data?.verified) {
            setTokens(data?.access, data?.refresh);
            successAction();
          } else {
            failureAction("Your email address is not verified");
          }
        })
        .catch((err) => {
          const error =
            err?.response?.data?.detail || "Something went wrong. Please try again later!";
          failureAction(error);
        });
    },

  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      destroyCookie(null, "accessToken", {
        path: "/",
      });
      destroyCookie(null, "refreshToken", {
        path: "/",
      });

      toast("You logged out!");

      routerPush(Router);
    },

  UPDATE_TOKEN:
    ({ dispatch }) =>
    async (action) => {
      if (cookies) {
        const refresh = cookies.refreshToken;

        try {
          const { data } = await axios.post(`${baseUrl}/token/refresh`, { refresh });
          setTokens(data?.access, null);
        } catch (err) {
          destroyCookie(null, "accessToken");
          destroyCookie(null, "refreshToken");
          window.location.href = "/";
          toast.error("Please login again");
        }
      }
    },

  SET_OTP:
    ({ dispatch }) =>
    async (action) => {
      try {
        const { data } = await axios.post(`${baseUrl}/user/verification/send`, action.payload);
        dispatch({ type: "OTP_SUCCESS", payload: action.otpPayload });
        toast.success(data?.message);
      } catch (err) {
        dispatch({ type: "SIGNIN_REJECT", error: "Something went wrong, Check your email" });

        if (err?.response?.data?.message == "Check your email") {
          dispatch({ type: "OTP_SUCCESS", payload: action.otpPayload });
        } else {
          dispatch({ type: "OTP_SUCCESS", payload: null });
        }
        const { message } = err?.response?.data || {};
        toast.error(message || "An error occurred. Please try again later.");
      }
    },

  SET_USER:
    ({ dispatch }) =>
    async (action) => {
      try {
        if (cookies.accessToken) {
          const response = await axios.get(`${baseUrl}/user/get`, {
            headers: {
              Authorization: `Bearer ${cookies.accessToken}`,
            },
          });
          dispatch({ type: "SIGNIN_SUCCESS", payload: response.data });
        }
      } catch (err) {
        console.error(err);
        dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.detail });
        destroyCookie(null, "accessToken");
        destroyCookie(null, "refreshToken");

        toast.error("An error occurred. Please try again later.");

        routerPush(Router);
      }
    },
};

export default function AuthProvider({ children }) {
  const [user, dispatch] = useReducerAsync(reducer, initialState, authHandlers);

  useEffect(() => {
    const oneHour = 1000 * 60 * 60;
    const refreshInterval = 24 * oneHour; // Refresh token every 24 hours

    const interval = setInterval(() => {
      if (cookies.accessToken) {
        dispatch({ type: "UPDATE_TOKEN" });
      }
    }, refreshInterval);

    return () => clearInterval(interval);
  }, []);

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
