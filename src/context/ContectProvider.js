import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initializeState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({ children }) => {
    return(
        <StateContext.Provider
            value={{ test: 'test'  }}
        >
            {children}
        </StateContext.Provider>

    ) 
}