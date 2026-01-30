import React, { useState } from "react";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function ServicesCarousel() {
  const services = [
    {
      title: "Instalaciones eléctricas industriales y residenciales",
      description:
        "Diseño, montaje y modernización de sistemas eléctricos para hogares, comercios y fábricas. Seguridad, eficiencia y cumplimiento de normativas garantizados.",
      image:
        "/services/instalaciones-electricas.png",
      tags: ["Tableros eléctricos", "Iluminación LED", "Certificación"],
    },
    {
      title: "Instalación y mantenimiento de aires acondicionados",
      description:
        "Venta, instalación profesional y servicio preventivo/correctivo para equipos de aire acondicionado split, central y más. Climatización confiable todo el año.",
      image:
        "/services/aire-acondicionado.jpg",
      tags: ["Carga de gas", "Limpieza profunda", "Reparación de fallas"],
    },
    {
      title: "Sistemas eléctricos y motores para jacuzzis y piscinas",
      description:
        "Instalación y automatización de bombas, filtros y sistemas eléctricos para piscinas y jacuzzis. Disfruta de agua limpia y segura con tecnología eficiente.",
      image:
        "/services/piscinas-jacuzzis.png",
      tags: ["Bombas automáticas", "Tableros de control", "Mantenimiento"],
    },
    {
      title: "Instalación de motores eléctricos para portones",
      description:
        "Automatiza tu acceso con motores eléctricos para portones corredizos y batientes. Instalación segura, rápida y con garantía de funcionamiento.",
      image:
        "/services/portones-electricos.png",
      tags: ["Control remoto", "Sensores de seguridad", "Soporte técnico"],
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full dark:bg-dark-bg py-6 md:py-10">
      <SectionHeader
        badge="Servicios"
        title="Nuestros Servicios Destacados"
        description="Somos Soluciones Eléctricas: resolvemos cualquier problema o hacemos realidad cualquier sueño . Confía en nosotros para un servicio seguro, eficiente y a tu medida."
      />
      {/* Carrusel horizontal solo en pantallas md+ */}
      <div className="hidden 2xl:flex justify-center">
        <div className="flex flex-row gap-6 items-end w-full max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`transition-all duration-300  ${i === index ? 'w-[370px] md:w-[420px] z-10' : 'w-[260px] md:w-[300px] opacity-80'} cursor-pointer`}
              style={{ minHeight: '420px' }}
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
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow z-20"
                style={{ pointerEvents: 'auto' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow z-20"
                style={{ pointerEvents: 'auto' }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </ServiceCard>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2 text-base font-bold text-white hover:bg-brand-cyan-dark transition-colors duration-200 shadow-sm min-w-[180px] group focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800/40"
        >
          Ver todos los servicios
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="h-5 w-6" />
          </span>
        </button>
      </div>
    </section>
  );
}

function ServiceCard({ service, selected, children }) {
  return (
    <article
      className={`overflow-hidden rounded-3xl bg-light-bg dark:bg-dark-bg shadow-lg transition-transform duration-300 border border-light-border dark:border-dark-border ${selected ? 'scale-105 shadow-2xl' : 'scale-95'}`}
    >
      <div className="relative h-[420px] w-full overflow-hidden flex items-end">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
        />
        {children}
        <div
          className={`relative z-10 w-full p-6 pb-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500
            ${selected ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}
            md:${selected ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}
            absolute left-0 bottom-0`}
        >
          <p className="text-base md:text-lg text-white/90 mb-4 max-w-xl">
            {service.description}
          </p>
          <button
            className="flex items-center gap-2 rounded-full bg-brand-cyan px-4 py-2 font-semibold text-white text-sm shadow-lg hover:bg-brand-cyan-dark transition-colors duration-200 group/button"
          >
            <span>Más información</span>
            <span className="inline-block transition-transform duration-300 group-hover/button:translate-x-2">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
