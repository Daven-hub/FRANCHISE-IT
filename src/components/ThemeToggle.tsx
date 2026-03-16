import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors duration-300"
    >
      {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}