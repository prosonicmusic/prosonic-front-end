import { createContext, useContext, useEffect } from "react";
import Router from "next/router";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import { setCookie, destroyCookie, parseCookies } from "nookies";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();
const cookies = parseCookies();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { error: null, loading: true, user: null };
    case "SIGNIN_SUCCESS":
      return { error: null, loading: false, user: action.payload };
    case "SIGNIN_REJECT":
      return { error: action.error, loading: false, user: null };
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
        .post("http://localhost:4545/user/register", action.payload)
        .then(({ data }) => {
          toast.success("You have successfully registered");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
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
        .post("http://localhost:4545/login", action.payload)
        .then(({ data }) => {
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
          // Router.push("/");
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.detail });
          toast.error(err?.response?.data?.detail);
          console.log(err);
        });
    },

  UPDATE_TOKEN:
    ({ dispatch }) =>
    (action) => {
      if (cookies) {
        const refresh = cookies.refreshToken;
        axios
          .post("http://localhost:4545/token/refresh", { refresh: refresh })
          .then(({ data }) => {
            console.log("access token updated");

            setCookie(null, "accessToken", data?.access, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
              secure: true,
              sameSite: "strict",
            });
          });
      }
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
    }, 10000);
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
