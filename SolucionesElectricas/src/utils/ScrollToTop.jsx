import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Componente utilitario que gestiona el scroll en navegación
 * - Guarda la posición del scroll de cada página
 * - Al navegar a una página nueva, va al inicio
 * - Al volver a una página ya visitada, restaura la posición guardada
 * 
 * Uso: Colocar dentro del Router, antes o después de Routes
 */
export default function ScrollToTop() {
  const location = useLocation();
  const prevPathRef = useRef(null);
  const isFirstVisitRef = useRef(new Set());

  useEffect(() => {
    const currentPath = location.pathname;
    const isFirstVisit = !isFirstVisitRef.current.has(currentPath);

    // Marcar esta ruta como visitada
    isFirstVisitRef.current.add(currentPath);

    // Guardar la posición del scroll anterior antes de cambiar
    if (prevPathRef.current) {
      const currentScroll = window.scrollY;
      sessionStorage.setItem(`scrollPos_${prevPathRef.current}`, currentScroll.toString());
    }

    // Verificar si hay una posición guardada para esta ruta
    const savedPosition = sessionStorage.getItem(`scrollPos_${currentPath}`);
    
    if (!isFirstVisit && savedPosition) {
      // Si ya visitamos esta página antes, restaurar posición
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
      }, 0);
    } else {
      // Si es la primera visita, ir al inicio
      window.scrollTo(0, 0);
    }

    // Actualizar la ruta anterior
    prevPathRef.current = currentPath;
  }, [location.pathname]);

  return null;
}
