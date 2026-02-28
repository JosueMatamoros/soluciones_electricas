import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * ImageModal - Modal para mostrar imágenes en pantalla completa
 * @param {string} imageUrl - URL de la imagen a mostrar
 * @param {string} alt - Texto alternativo de la imagen
 * @param {boolean} isOpen - Controla si el modal está abierto
 * @param {function} onClose - Función para cerrar el modal
 */
export default function ImageModal({ imageUrl, alt, isOpen, onClose }) {
  const { isDarkMode } = useTheme();

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Contenedor de la imagen */}
      <div
        className="relative z-10 max-w-7xl max-h-[90vh] w-full animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className={`absolute -top-12 right-0 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? "bg-dark-bg-secondary text-dark-text hover:bg-brand-cyan hover:text-dark-bg"
              : "bg-white text-light-text hover:bg-brand-cyan hover:text-white"
          } shadow-lg z-20`}
          aria-label="Cerrar imagen"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Imagen */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={imageUrl}
            alt={alt}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Texto alternativo */}
        {alt && (
          <div
            className={`mt-4 text-center px-4 py-2 rounded-lg ${
              isDarkMode
                ? "bg-dark-bg-secondary/80 text-dark-text"
                : "bg-white/80 text-light-text"
            } backdrop-blur-sm`}
          >
            <p className="text-sm font-medium">{alt}</p>
          </div>
        )}
      </div>
    </div>
  );
}
