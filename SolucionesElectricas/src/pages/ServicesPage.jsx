import React from "react";
import { useTheme } from "../context/ThemeContext";
import ServiceCard from "../components/common/ServiceCard";
import CardsList from "../components/common/CardsList";
import SectionHeader from "../components/common/SectionHeader";
import { SERVICES } from "../data/services";

function ServicesPage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      } pb-10`}
    >
      <div className="sm:hidden">
        <section className="snap-start">
          <div className="mx-auto max-w-6xl px-2 py-6">
            <SectionHeader
              badge="Servicios"
              title="Nuestros Servicios"
              description="Soluciones eléctricas profesionales adaptadas a tus necesidades. Calidad, seguridad y experiencia en cada proyecto."
            />
          </div>
        </section>

        <section className="snap-start">
          <div className="mx-auto max-w-6xl">
            <CardsList services={SERVICES} />
          </div>
        </section>

      </div>

      <div className="hidden sm:block min-h-screen">
        <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10">
          <SectionHeader
            badge="Servicios"
            title="Nuestros Servicios"
            description="Soluciones eléctricas profesionales adaptadas a tus necesidades. Calidad, seguridad y experiencia en cada proyecto."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
                image={service.image}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
