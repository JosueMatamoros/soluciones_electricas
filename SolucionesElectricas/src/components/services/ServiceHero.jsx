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
        {/* Vista móvil - Título sobre imagen */}
        <div className="lg:hidden">
          <div className={`relative rounded-3xl overflow-hidden mb-6 ${
            isDarkMode ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"
          }`}>
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Botón volver en móvil */}
              {showBackButton && (
                <button
                  onClick={() => navigate("/servicios")}
                  className="group absolute top-4 right-4 bg-brand-cyan text-white shadow-lg shadow-brand-cyan/30 hover:bg-brand-cyan-dark hover:scale-105 transition-all px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold z-20 backdrop-blur-md/60 border border-white/30"
                  style={{backdropFilter: 'blur(6px)'}}
                >
                  <ArrowLeft className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
                  Volver a servicios
                </button>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                {Icon && (
                  <div className="inline-flex p-3 rounded-xl mb-4 bg-brand-cyan/20 backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-brand-cyan" strokeWidth={1.5} />
                  </div>
                )}
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  Programación de Portones Eléctricos
                </h1>
              </div>
            </div>
          </div>
          
          {/* Descripción como quote en móvil */}
          {description && (
            <blockquote className={`relative p-6 rounded-2xl border-l-4 border-brand-cyan italic ${
              isDarkMode 
                ? "bg-dark-bg-secondary/50 text-dark-text-secondary" 
                : "bg-light-bg-secondary/50 text-light-text-secondary"
            }`}>
              <p className="text-lg">
                {description}
              </p>
            </blockquote>
          )}
        </div>

        {/* Vista desktop - Split original */}
        <div className={`hidden lg:block relative rounded-3xl overflow-hidden ${
          isDarkMode ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"
        }`}>
          {/* Botón volver a servicios en desktop */}
          {showBackButton && (
            <button
              onClick={() => navigate("/servicios")}
              className="group absolute top-4 right-4 sm:top-6 sm:right-6 bg-brand-cyan text-white shadow-lg shadow-brand-cyan/30 hover:bg-brand-cyan-dark hover:scale-105 transition-all px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold z-20 backdrop-blur-md/60 border border-white/30"
              style={{backdropFilter: 'blur(6px)'}}
            >
              <ArrowLeft className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
              Volver a servicios
            </button>
          )}
          
          <div className="grid grid-cols-2 gap-8">
            <div className="relative h-[500px] overflow-hidden">
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
              <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
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
      </div>
    );
  }

  return (
    <>
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

          {/* Botón volver a servicios en la esquina superior derecha */}
          {showBackButton && (
            <button
              onClick={() => navigate("/servicios")}
              className="group absolute top-4 right-4 sm:top-6 sm:right-6 bg-brand-cyan text-white shadow-lg shadow-brand-cyan/30 hover:bg-brand-cyan-dark hover:scale-105 transition-all px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold z-20 backdrop-blur-md/60 border border-white/30"
              style={{backdropFilter: 'blur(6px)'}}
            >
              <ArrowLeft className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
              Volver a servicios
            </button>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            {Icon && (
              <div className={`inline-flex md:p-3 p-1.5  rounded-xl mb-4 ${
                isDarkMode
                  ? "bg-brand-cyan/20 backdrop-blur-sm"
                  : "bg-brand-cyan/10 backdrop-blur-sm"
              }`}>
                <Icon className=" h-6 w-6 sm:w-8 sm:h-8 text-brand-cyan" strokeWidth={1.5} />
              </div>
            )}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              variant === "overlay" ? "text-white" : isDarkMode ? "text-white" : "text-dark-bg"
            } text-2xl sm:text-3xl md:text-4xl`}>
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
