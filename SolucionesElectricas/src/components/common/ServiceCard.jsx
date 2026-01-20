import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ArrowRight } from "lucide-react";

function ServiceCard({ id, title, description, image, icon }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`group rounded-lg overflow-hidden transition-all duration-300 ${
        isDarkMode
          ? "bg-dark-bg-secondary hover:bg-dark-bg-tertiary"
          : "bg-light-bg-secondary hover:bg-light-bg-tertiary"
      } hover:shadow-xl hover:shadow-brand-cyan/10`}
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br transition-all duration-300 ${
            isDarkMode
              ? "from-brand-cyan/20 to-brand-cyan-dark/20 group-hover:from-brand-cyan/30 group-hover:to-brand-cyan-dark/30"
              : "from-brand-cyan/10 to-brand-cyan-dark/10 group-hover:from-brand-cyan/20 group-hover:to-brand-cyan-dark/20"
          }`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl">{icon}</span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <h3
          className={`text-xl font-bold transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {title}
        </h3>
        
        <p
          className={`text-sm leading-relaxed transition-colors duration-300 ${
            isDarkMode ? "text-dark-text-muted" : "text-light-text-muted"
          }`}
        >
          {description}
        </p>

        {/* Botón */}
        <Link
          to={`/servicios/${id}`}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isDarkMode
              ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light"
              : "bg-brand-cyan-dark text-white hover:bg-brand-cyan"
          }`}
        >
          Ver detalles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
