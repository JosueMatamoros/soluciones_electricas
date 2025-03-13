import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`h-screen w-full transition-all duration-500 ${
        isDarkMode ? "bg-main-dark-bg" : " bg-main-light-bg"
      }`}
    >
      Grupo sen
    </div>
  );
}
