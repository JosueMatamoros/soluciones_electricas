// src/components/gallery/TabButton.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabButton({ active, onClick, icon: Icon, children }) {
  const { isDarkMode } = useTheme();
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition my-2 transition-colors duration-300",
        "border focus:outline-none focus:ring-2 focus:ring-brand-cyan",
        "hover:scale-105",
        isDarkMode
          ? active
            ? "bg-dark-bg text-brand-cyan border-brand-cyan shadow-md"
            : "bg-dark-bg-secondary text-dark-text-secondary border-dark-border hover:bg-dark-bg-tertiary hover:border-brand-cyan"
          : active
            ? "bg-brand-cyan-dark text-white border-brand-cyan-dark shadow-md"
            : "bg-light-bg text-light-text-secondary border-light-border hover:bg-light-bg-tertiary hover:border-brand-cyan-dark"
      )}
      aria-pressed={active}
    >
      {Icon && (
        <Icon
          size={20}
          className={cx(
            active
              ? isDarkMode
                ? "text-brand-cyan"
                : "text-white"
              : isDarkMode
                ? "text-dark-text-secondary group-hover:text-brand-cyan"
                : "text-light-text-secondary group-hover:text-brand-cyan-dark",
            "transition-colors duration-200"
          )}
        />
      )}
      <span className="truncate hidden sm:inline">{children}</span>
    </button>
  );
}
