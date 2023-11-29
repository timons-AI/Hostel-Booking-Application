/*
  This code defines a React context and a reducer for managing search state.
  It provides an initial state with properties for city, dates, and search options.
  Two actions are defined for updating the search state: "NEW_SEARCH" and "RESET_SEARCH".
  The context provider uses the useReducer hook to manage state with the defined reducer.
  The provider component exposes the search state and the dispatch function to its children.
*/

// Import necessary dependencies from React
import { createContext, useReducer } from "react";

// Define the initial state for the search context
const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

// Create the search context using createContext
export const SearchContext = createContext(INITIAL_STATE);

// Define the search reducer function
const SearchReducer = (state, action) => {
  switch (action.type) {
    // Action to update the search state with new values
    case "NEW_SEARCH":
      return action.payload;
    // Action to reset the search state to its initial values
    case "RESET_SEARCH":
      return INITIAL_STATE;
    // Default case returns the current state
    default:
      return state;
  }
};

// Create the context provider component for the search context
export const SearchContextProvider = ({ children }) => {
  // Use the useReducer hook to manage state with the defined reducer
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  // Return the context provider with the provided value and children
  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
