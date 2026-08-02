import {
  createContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext =
  createContext(null);

export function ThemeProvider({
  children,
}) {
  const [theme, setTheme] =
    useState(() => {
      const savedTheme =
        localStorage.getItem("theme");

      if (
        savedTheme === "light" ||
        savedTheme === "dark"
      ) {
        return savedTheme;
      }

      return "light";
    });

  useEffect(() => {
    const root =
      document.documentElement;

    root.classList.remove(
      "light",
      "dark"
    );

    root.classList.add(theme);

    root.style.colorScheme = theme;

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light"
        ? "dark"
        : "light"
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}