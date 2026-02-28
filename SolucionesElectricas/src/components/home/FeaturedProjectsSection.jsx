import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../gallery/ProjectCard";
import ImageModal from "../common/ImageModal";
import { PROJECTS } from "../../data/Projects/projects";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <section className="mx-auto max-w-6xl py-6 md:py-12">
      <SectionHeader
        badge={t('home.projects.badge')}
        title={<><span>{t('home.projects.title')} </span><span className="text-brand-cyan">{t('home.projects.titleHighlight')}</span></>}
        description={t('home.projects.description')}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-2">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onClick={() => setSelectedImage({ src: project.imageUrl, alt: project.title })}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="/galeria"
          className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 px-5 py-2 text-base font-bold text-brand-cyan hover:bg-brand-cyan/10 transition-colors duration-200 shadow-sm min-w-[180px] group"
        >
          {t('home.projects.viewAll')}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="h-5 w-6" />
          </span>
        </Link>
      </div>

      {/* Modal de imagen */}
      <ImageModal
        imageUrl={selectedImage?.src}
        alt={selectedImage?.alt}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
