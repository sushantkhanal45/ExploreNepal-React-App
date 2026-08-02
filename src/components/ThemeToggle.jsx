import { useContext } from "react";
import {
  Moon,
  Sun,
} from "lucide-react";

import {
  ThemeContext,
} from "../context/ThemeContext";

function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        flex h-11 w-11
        items-center
        justify-center
        rounded-full
        border
        border-slate-200
        bg-white
        text-slate-800
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-md
        dark:border-white/10
        dark:bg-white/10
        dark:text-yellow-300
      "
    >
      {theme === "light" ? (
        <Moon size={19} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;