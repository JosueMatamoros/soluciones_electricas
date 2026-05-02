import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ModeToggle({ size = 20 }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
      style={{ width: size, height: size }}
      className="flex items-center justify-center text-current transition-transform duration-300 hover:scale-110 focus:outline-none"
    >
      {isDarkMode ? (
        <FiSun size={size} />
      ) : (
        <FiMoon size={size} />
      )}
    </button>
  );
}
