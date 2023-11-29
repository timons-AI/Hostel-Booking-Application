/*
  This file defines a React context and a reducer for managing authentication state.
  It provides an initial state, actions for login success/failure, logout, and a context provider.
  The context provider uses the reducer and manages the state using the useReducer hook.
  It also persists user information to local storage.
*/

// Import necessary dependencies from React
import { createContext, useEffect, useReducer } from "react";

// Define the initial state for the authentication context
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

// Create the authentication context using createContext
export const AuthContext = createContext(INITIAL_STATE);

// Define the authentication reducer function
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// Create the context provider component for the authentication context
export const AuthContextProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the defined reducer
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Effect hook to persist user information to local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // Return the context provider with the provided value and children
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
