import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import getSystemTheme from "../utils/getSystemTheme";

// Create context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  // Use localStorage to persist theme, fallback to system theme
  const [theme, setTheme] = useLocalStorage(
    "theme",
    getSystemTheme() // initial value
  );

  // Update body class on theme change
  React.useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
