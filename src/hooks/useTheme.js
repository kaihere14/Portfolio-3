import { useState, useEffect } from "react";
import { getTheme } from "../utils/theme";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = window.localStorage.getItem("theme");
        return stored ? stored === "dark" : true;
      }
    } catch (e) {
      // ignore
    }
    return true;
  });

  // Persist theme preference to localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", darkMode ? "dark" : "light");
      }
    } catch (e) {
      // ignore write errors
    }
  }, [darkMode]);

  const theme = getTheme(darkMode);

  return { darkMode, setDarkMode, theme };
};

