import React from "react";

/**
 * ServiceFeatureCard - Tarjeta para mostrar una característica destacada del servicio
 * @param {string} badge - Texto de la categoría
 * @param {string} title - Título de la característica
 * @param {string} description - Descripción breve
 * @param {string} image - URL de la imagen
 */
export default function ServiceFeatureCard({ badge, title, description, image }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-lg bg-white/90 dark:bg-dark-bg-secondary/90 relative group transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">{title}</h3>
      </div>
    </div>
  );
}
