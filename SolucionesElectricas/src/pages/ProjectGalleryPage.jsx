
import React, { useMemo, useState } from "react";
import { PROJECTS } from "../data/Projects/projects";
import ProjectCard from "../components/gallery/ProjectCard";
import TabButton from "../components/gallery/TabButton";
import SectionHeader from "../components/common/SectionHeader";
import { useTheme } from "../context/ThemeContext";
import { Layers, Droplets, Zap, Cog, Snowflake } from "lucide-react";

const CATEGORIES = [
  { label: "Todos", icon: Layers },
  { label: "Piscinas", icon: Droplets },
  { label: "Electricidad General", icon: Zap },
  { label: "Motores", icon: Cog },
  { label: "Aires Acondicionados", icon: Snowflake },
];

// Utilidades y layout para la galería
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Patrón de “bento spans”: se repite por índice.
const BENTO_SPANS = [
  "md:col-span-2 md:row-span-2", // grande
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1", // ancho
  "md:col-span-1 md:row-span-2", // alto
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];


export default function ProjectGalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const { isDarkMode } = useTheme();

  // Shuffle para mezclar proyectos solo en "Todos"
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return shuffle(PROJECTS);
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={cx(
      "min-h-screen transition-colors duration-300",
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    )}>
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 transition-colors duration-300">
        {/* Nuevo SectionHeader */}
        <SectionHeader
          badge="Galería"
          badgeIcon={Layers}
          title="Proyectos"
          description="Galería con filtro por categorías y layout tipo bento. Porque a la gente le encanta ver tarjetas bonitas."
        />
        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto px-4 mb-4">
          {CATEGORIES.map(({ label, icon }, idx) => (
            <TabButton
              key={label}
              icon={icon}
              active={activeCategory === label}
              onClick={() => setActiveCategory(label)}
            >
              {label}
            </TabButton>
          ))}
        </div>
        {/* Grid */}
        <section className="mt-2">
          <div
            className={cx(
              "grid grid-cols-2 gap-3 sm:gap-4",
              "xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:auto-rows-[180px]",
              "md:[grid-auto-flow:dense]"
            )}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                spanClass={BENTO_SPANS[index % BENTO_SPANS.length]}
              />
            ))}
          </div>
          {/* Estado vacío */}
          {filteredProjects.length === 0 && (
            <div className={cx(
              "mt-10 rounded-2xl border p-10 text-center transition-colors duration-300",
              isDarkMode ? "border-dark-border bg-dark-bg-secondary text-dark-text-secondary" : "border-light-border bg-white text-light-text-secondary"
            )}>
              <p className="font-medium">No hay proyectos en esta categoría.</p>
              <p className="mt-1 text-sm">Increíblemente, a veces pasa.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
