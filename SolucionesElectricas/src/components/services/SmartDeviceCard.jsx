import React from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * SmartDeviceCard - Card para mostrar dispositivos inteligentes
 */
export default function SmartDeviceCard({ title, description, image, icon: Icon }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isDarkMode
          ? "bg-gradient-to-br from-dark-bg-secondary to-dark-bg-tertiary border-brand-cyan/20 hover:border-brand-cyan/50"
          : "bg-gradient-to-br from-white to-cyan-50 border-cyan-200 hover:border-cyan-400"
      }`}
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-cyan/10 to-blue-500/10">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {Icon && <Icon className="w-20 h-20 text-brand-cyan/30" />}
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          {Icon && (
            <div className={`p-2 rounded-lg transition-transform duration-300 group-hover:scale-110 ${
              isDarkMode ? "bg-brand-cyan/10" : "bg-brand-cyan/20"
            }`}>
              <Icon className="w-5 h-5 text-brand-cyan" />
            </div>
          )}
          <div className="flex-1">
            <h3
              className={`font-bold text-lg mb-1 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              {title}
            </h3>
          </div>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
