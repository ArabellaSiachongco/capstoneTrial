import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
// current object
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

// whatever value passed here it will go Through all the component listed in the entire app, ex. is notification is open or close? it will Always return the children 

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    // pass the state over the value
    const [isClicked, setIsClicked] = useState(initialState);
    // screen sized
    const [screenSize, setScreenSize] = useState(undefined);
    // object to string, so spread it as:
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }

    return(
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked, 
                setIsClicked,
                handleClick,
                screenSize, 
                setScreenSize,
            }}
        >
            {children}
        </StateContext.Provider>

    ) 
}

// active menu insede sidebar? is to export usestate, a function that return the context

export const useStateContext = () => useContext(StateContext);

// add imports and const to call the usestate