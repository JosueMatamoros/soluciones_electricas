import React from "react";
import { CheckCircle2, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * ServiceFeatures - Componente para mostrar características del servicio
 * @param {string} variant - "list", "grid", "cards", "timeline"
 */
export default function ServiceFeatures({ 
  features, 
  variant = "list",
  title = "Características del servicio"
}) {
  const { isDarkMode } = useTheme();

  if (variant === "grid") {
    return (
      <div className={`p-6 rounded-xl ${
        isDarkMode
          ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
          : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
          isDarkMode ? "text-dark-text" : "text-light-text"
        }`}>
          <Zap className="w-6 h-6 text-brand-cyan" />
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg flex items-start gap-3 ${
                isDarkMode ? "bg-dark-bg-tertiary" : "bg-light-bg-tertiary"
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
              <span className={isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className="space-y-4">
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${
          isDarkMode ? "text-dark-text" : "text-light-text"
        }`}>
          <Zap className="w-6 h-6 text-brand-cyan" />
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? "bg-dark-bg-secondary shadow-lg shadow-black/20 hover:shadow-brand-cyan/20" 
                  : "bg-light-bg-secondary shadow-md shadow-gray-300/50 hover:shadow-brand-cyan/20"
              }`}
            >
              <CheckCircle2 className="w-6 h-6 text-brand-cyan mb-3" />
              <p className={`text-sm font-medium ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "timeline") {
    return (
      <div className={`p-6 rounded-xl ${
        isDarkMode
          ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
          : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
          isDarkMode ? "text-dark-text" : "text-light-text"
        }`}>
          <Zap className="w-6 h-6 text-brand-cyan" />
          {title}
        </h2>
        <div className="relative space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                {index < features.length - 1 && (
                  <div className={`w-0.5 flex-1 mt-2 ${
                    isDarkMode ? "bg-dark-bg-tertiary" : "bg-light-bg-tertiary"
                  }`} style={{ minHeight: "40px" }} />
                )}
              </div>
              <div className={`flex-1 pb-6 ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: list variant
  return (
    <div className={`p-6 rounded-xl ${
      isDarkMode
        ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
        : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
    }`}>
      <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
        isDarkMode ? "text-dark-text" : "text-light-text"
      }`}>
        <Zap className="w-6 h-6 text-brand-cyan" />
        {title}
      </h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
            <span className={isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
