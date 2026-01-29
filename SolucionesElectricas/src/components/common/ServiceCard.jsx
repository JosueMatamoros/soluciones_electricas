import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ArrowRight } from "lucide-react";

function ServiceCard({ id, title, icon: Icon, image, description }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`group rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full transform hover:scale-105 ${
        isDarkMode
          ? "bg-dark-bg-secondary hover:bg-dark-bg-tertiary shadow-lg shadow-black/20"
          : "bg-light-bg-secondary hover:bg-light-bg-tertiary shadow-md shadow-gray-300/50"
      } hover:shadow-xl hover:shadow-brand-cyan/20`}
    >
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br transition-all duration-300 ${
            isDarkMode
              ? "from-brand-cyan/20 to-brand-cyan-dark/20 group-hover:from-brand-cyan/30 group-hover:to-brand-cyan-dark/30"
              : "from-brand-cyan/10 to-brand-cyan-dark/10 group-hover:from-brand-cyan/20 group-hover:to-brand-cyan-dark/20"
          }`}
        />
      </div>

      {/* Contenido - flex-grow para empujar el botón abajo */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3
          className={`text-lg font-bold transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {title}
        </h3>

        {/* Descripción que aparece solo en hover */}
        <div className="relative overflow-hidden">
          <p
            className={`text-sm transition-all duration-300 transform ${
              isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
            } opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 max-h-0 group-hover:max-h-20`}
          >
            {description}
          </p>
        </div>

        {/* Botón alineado al final */}
        <Link
          to={`/servicios/${id}`}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
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
