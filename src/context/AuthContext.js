import { createContext, useContext } from "react";
import Router from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();
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
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      // loading
      dispatch({ type: "SIGNIN_PENDING" });

      axios
        .post("http://localhost:4545/login", action.payload, { withCredentials: true })
        .then(({ data }) => {
          toast.success("You have successfully logged in");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.detail });
          toast.error(err?.response?.data?.detail);
        });
    },
  SIGNUP: {},
  SIGNOUT: {},
};

export default function AuthProvider({ children }) {
  const [user, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers);
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
