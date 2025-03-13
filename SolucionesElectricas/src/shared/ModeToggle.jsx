import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../context/ThemeContext"; 

export default function ModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      size={30} 
    />
  );
}
