import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../../Utility/reducer";

// Create the context

export const DataContext = createContext();

// Provider component

export const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
