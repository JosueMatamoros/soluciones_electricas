import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ArrowRight } from "lucide-react";

function ServiceCard({ id, title, image, description }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row rounded-xl overflow-hidden transition-all duration-300 border min-h-[280px] h-full ${
        isDarkMode
          ? "bg-dark-bg-secondary shadow-lg shadow-black/20 border-dark-border hover:border-brand-cyan"
          : "bg-light-bg-secondary shadow-md shadow-gray-300/40 border-light-border hover:border-brand-cyan"
      } hover:shadow-xl hover:scale-105 relative`}
      style={{height: '100%'}}
    >
      <Link
        to={`/servicios/${id}`}
        className="absolute inset-0 z-10 md:hidden"
        aria-label={`Ver detalles de ${title}`}
      />
      {/* Imagen */}
      <div className="md:w-[48%] h-56 md:h-auto min-h-[200px] md:min-h-0 flex-shrink-0 flex-grow-0 h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between p-4 md:w-[52%] h-full">
        <div>
          <h3
            className={`text-xl font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-sm leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="mt-6">
          <Link
            to={`/servicios/${id}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/10 px-5 py-2 text-base font-bold text-brand-cyan hover:bg-brand-cyan/10 transition-colors duration-200 shadow-sm min-w-[150px] group"
          >
            Ver detalles
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
