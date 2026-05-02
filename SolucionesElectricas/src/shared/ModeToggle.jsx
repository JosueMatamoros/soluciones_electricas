import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function ModeToggle({ size = 20 }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? t("common.toggleLight") : t("common.toggleDark")}
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
