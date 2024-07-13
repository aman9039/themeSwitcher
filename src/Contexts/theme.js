import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
});


export const ThemeProvider = ThemeContext.Provider

// creating a Custom hook useTheme to export to use value and methods -->

export default function useTheme(){
    return useContext(ThemeContext)
}