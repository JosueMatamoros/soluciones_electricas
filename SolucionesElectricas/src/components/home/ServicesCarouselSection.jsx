import React, { useState } from "react";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeader from "../common/SectionHeader";
import { CAROUSEL_SERVICES } from "../../data/carouselServices";

export default function ServicesCarousel() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = CAROUSEL_SERVICES.map((s) => ({
    ...s,
    title: t(`home.carouselServices.${s.id}.title`),
    description: t(`home.carouselServices.${s.id}.description`),
    tags: t(`home.carouselServices.${s.id}.tags`, { returnObjects: true }),
  }));

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-light-bg dark:bg-dark-bg transition-colors duration-300 py-6 md:py-10 ">
      <SectionHeader
        badge={t('home.services.badge')}
        title={t('home.services.title')}
        description={t('home.services.description')}
      />
      {/* Carrusel horizontal solo en pantallas md+ */}
      <div className="hidden 2xl:flex justify-center">
        <div className="flex flex-row gap-6 items-end w-full max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`transition-all duration-300  ${i === index ? "w-[370px] md:w-[420px] z-10" : "w-[260px] md:w-[300px] opacity-80"} cursor-pointer`}
              style={{ minHeight: "420px" }}
              onClick={() => setIndex(i)}
            >
              <ServiceCard service={s} selected={i === index} />
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel clásico solo en pantallas pequeñas */}
      <div className="relative 2xl:hidden flex justify-center mt-6">
        <div className="w-full max-w-3xl">
          <div className="relative">
            <ServiceCard service={services[index]} selected={true}>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 shadow z-20 transition-colors duration-200 bg-white/90 dark:bg-slate-800/90 dark:text-white hover:bg-brand-cyan/90 dark:hover:bg-cyan-600"
                style={{ pointerEvents: "auto" }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 shadow z-20 transition-colors duration-200 bg-white/90 dark:bg-slate-800/90 dark:text-white hover:bg-brand-cyan/90 dark:hover:bg-cyan-600"
                style={{ pointerEvents: "auto" }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </ServiceCard>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/servicios")}
          className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2 text-base font-bold text-white hover:bg-brand-cyan-dark transition-colors duration-200 shadow-sm min-w-[180px] group focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800/40"
        >
          {t('home.services.viewAll')}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="h-5 w-6" />
          </span>
        </button>
      </div>
    </section>
  );
}

function ServiceCard({ service, selected, children }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <article
      className={`overflow-hidden rounded-3xl bg-light-bg dark:bg-dark-bg shadow-lg transition-transform duration-300 border-2
        ${
          selected
            ? "border-brand-cyan dark:border-cyan-400 scale-105 shadow-2xl"
            : "border-light-border dark:border-dark-border scale-95"
        }
        transition-colors duration-300`}
    >
      <div className="relative h-[420px] w-full overflow-hidden flex items-end">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
        />
        {children}
        <div
          className={`relative z-10 w-full h-full flex flex-col justify-end p-4 pb-6 md:p-5 md:pb-7 2xl:p-4 2xl:pb-4
            bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-colors duration-300
            ${selected ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}
            md:${selected ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}
            absolute left-0 bottom-0`}
        >
          <div>
            <p className="text-sm md:text-base 2xl:text-[1.05rem] text-white font-medium mb-3 2xl:mb-2 max-w-2xl 2xl:leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {service.description}
            </p>
            <button
              onClick={() => navigate(service.link)}
              className="flex items-center gap-2 rounded-full bg-brand-cyan/90 px-3 py-1.5 font-semibold text-white text-xs md:text-sm shadow-lg hover:bg-brand-cyan-dark transition-colors duration-200 group/button"
            >
              <span>{t('common.moreInfo')}</span>
              <span className="inline-block transition-transform duration-300 group-hover/button:translate-x-2">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
