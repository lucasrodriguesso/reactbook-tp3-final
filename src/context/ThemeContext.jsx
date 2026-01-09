import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext(null);

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  useEffect(() => {
    try {
      document.body.setAttribute("data-theme", state.theme);
    } catch (e) {
  
    }
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
