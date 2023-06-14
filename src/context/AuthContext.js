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
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { ...state, error: null, loading: true, user: null, token: null };
    case "SIGNIN_SUCCESS":
      return { ...state, error: null, loading: false, user: action.payload };
    case "OTP_STATUS":
      return { ...state, error: null, otp: action.payload || null };
    case "TOKEN_SUCCESS":
      return { ...state, token: action.payload };
    case "SIGNIN_REJECT":
      return { ...state, error: action.error, loading: false, user: null };
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
        const errorMsg = err?.response?.data?.message;

        if (detail || errorMsg) {
          toast.error(detail || errorMsg);
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

  SET_TOKEN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "TOKEN_SUCCESS", payload: action.tokenPayload });
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
        dispatch({ type: "OTP_STATUS", payload: action.otpPayload });
        toast.success(data?.message);
      } catch (err) {
        dispatch({ type: "SIGNIN_REJECT", error: "Something went wrong, Check your email" });

        if (err?.response?.data?.message == "Check your email") {
          dispatch({ type: "OTP_STATUS", payload: action.otpPayload });
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

  useEffect(() => {
    if (cookies.accessToken) {
      dispatch({ type: "SET_TOKEN", tokenPayload: cookies.accessToken });
      dispatch({ type: "SET_USER" });
    }
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
