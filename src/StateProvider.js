import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

// Prepares the data layer
export const StateContext = createContext();

// This will wrap the app and provide the data layer to every component inside of the app
export const StateProvider = ({ reducer, initialState, children }) =>
    (<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}

    </StateContext.Provider>
    );

export const useStateValue = () => useContext(StateContext);