import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * ServiceHero - Componente hero reutilizable para páginas de servicios
 * @param {string} variant - Variante del estilo: "classic", "overlay", "split", "minimal"
 */
export default function ServiceHero({ 
  title, 
  image, 
  icon: Icon, 
  variant = "classic",
  showBackButton = true,
  description
}) {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const variantStyles = {
    classic: {
      container: "rounded-2xl overflow-hidden mb-8",
      imageHeight: "h-64 sm:h-80 md:h-96",
      overlay: `bg-gradient-to-t ${isDarkMode ? 'from-dark-bg via-dark-bg/50' : 'from-light-bg via-light-bg/50'} to-transparent`,
    },
    overlay: {
      container: "rounded-3xl overflow-hidden mb-10 relative",
      imageHeight: "h-80 sm:h-96 md:h-[500px]",
      overlay: `bg-gradient-to-br ${isDarkMode ? 'from-black/70 via-black/50' : 'from-black/60 via-black/40'} to-transparent`,
    },
    split: {
      container: "mb-8",
      imageHeight: "h-full min-h-[400px]",
      overlay: "bg-gradient-to-r from-black/40 to-transparent",
    },
    minimal: {
      container: "mb-8",
      imageHeight: "h-48 sm:h-56",
      overlay: `${isDarkMode ? 'bg-black/30' : 'bg-black/20'}`,
    }
  };

  const styles = variantStyles[variant] || variantStyles.classic;

  if (variant === "split") {
    return (
      <div className="mb-8">
        {showBackButton && (
          <button
            onClick={() => navigate("/servicios")}
            className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
              isDarkMode
                ? "text-dark-text hover:bg-dark-bg-secondary"
                : "text-light-text hover:bg-light-bg-secondary"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </button>
        )}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden ${
          isDarkMode ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"
        }`}>
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${styles.overlay}`} />
          </div>
          <div className="p-8 flex flex-col justify-center">
            {Icon && (
              <div className={`inline-flex p-4 rounded-2xl mb-6 w-fit ${
                isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
              }`}>
                <Icon className="w-10 h-10 text-brand-cyan" strokeWidth={1.5} />
              </div>
            )}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}>
              {title}
            </h1>
            {description && (
              <p className={`text-lg ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showBackButton && (
        <button
          onClick={() => navigate("/servicios")}
          className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "text-dark-text hover:bg-dark-bg-secondary"
              : "text-light-text hover:bg-light-bg-secondary"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a servicios
        </button>
      )}

      <div className={`${styles.container} ${
        isDarkMode
          ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
          : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
      }`}>
        <div className={`relative ${styles.imageHeight} overflow-hidden`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${styles.overlay}`} />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            {Icon && (
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                isDarkMode
                  ? "bg-brand-cyan/20 backdrop-blur-sm"
                  : "bg-brand-cyan/10 backdrop-blur-sm"
              }`}>
                <Icon className="w-8 h-8 text-brand-cyan" strokeWidth={1.5} />
              </div>
            )}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              variant === "overlay" ? "text-white" : isDarkMode ? "text-white" : "text-dark-bg"
            }`}>
              {title}
            </h1>
            {description && variant === "overlay" && (
              <p className="text-white/90 text-lg mt-4 max-w-3xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
