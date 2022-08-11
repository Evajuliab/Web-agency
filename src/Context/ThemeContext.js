import React, {createContext, useState} from 'react';
import { useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) =>{
    const [theme, setTheme] = (useState( localStorage['theme'] ? 
    JSON.parse(localStorage['theme']) : true
  ));

    useEffect(() =>  {localStorage.setItem("theme", JSON.stringify(theme))}, [theme])

    const toggleTheme = () => {
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;