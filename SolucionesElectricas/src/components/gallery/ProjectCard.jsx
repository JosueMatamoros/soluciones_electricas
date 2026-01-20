// src/components/gallery/ProjectCard.jsx
import React from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectCard({ project, spanClass }) {
  return (
    <article
      className={cx(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100",
        "shadow-sm hover:shadow-md transition-shadow",
        "min-h-[180px]",
        spanClass
      )}
    >
      {/* Imagen */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className={cx(
          "h-full w-full object-cover",
          "transition-transform duration-500 ease-out",
          "group-hover:scale-[1.04]"
        )}
        loading="lazy"
      />

      {/* Badge categoría */}
      <div className="absolute left-4 top-4">
        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Overlay hover */}
      <div
        className={cx(
          "absolute inset-0",
          "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        )}
        aria-hidden="true"
      />

      <div
        className={cx(
          "absolute bottom-0 left-0 right-0 p-4",
          "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        )}
      >
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-sm leading-tight">{project.description}</p>
      </div>
    </article>
  );
}
