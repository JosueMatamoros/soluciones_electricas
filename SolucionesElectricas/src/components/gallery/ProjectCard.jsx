// src/components/gallery/ProjectCard.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Droplets, Zap, Cog, Snowflake } from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectCard({ project, spanClass }) {
  const { isDarkMode } = useTheme();

  // Mapeo de categoría a icono
  const categoryIcons = {
    "Piscinas": Droplets,
    "Electricidad General": Zap,
    "Motores": Cog,
    "Aires Acondicionados": Snowflake,
  };
  const CategoryIcon = categoryIcons[project.category];

  return (
    <article
      className={cx(
        "group relative overflow-hidden rounded-2xl border",
        isDarkMode
          ? "border-dark-border bg-dark-bg-secondary"
          : "border-slate-200 bg-slate-100",
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
      <div className="absolute left-2 top-2">
        <span
          className={cx(
            "inline-flex items-center justify-center rounded-full backdrop-blur",
            isDarkMode
              ? "bg-dark-bg/80 text-brand-cyan border border-dark-border"
              : "bg-white/90 text-brand-cyan-dark border border-slate-200",
            "w-8 h-8"
          )}
        >
          {CategoryIcon && <CategoryIcon size={22} />}
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
        <h3 className="text-lg font-bold mb-1 text-white">{project.title}</h3>
        <p className="text-sm leading-tight text-white">{project.description}</p>
      </div>
    </article>
  );
}
