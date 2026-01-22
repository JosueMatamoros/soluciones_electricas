import React from "react";
import { useTheme } from "../context/ThemeContext";
import ServiceCard from "../components/common/ServiceCard";
import SectionHeader from "../components/common/SectionHeader";
import { Zap } from "lucide-react";
import { SERVICES } from "../data/services";

function ServicesPage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10">
        <SectionHeader
          badge="Servicios"
          badgeIcon={Zap}
          title="Nuestros Servicios"
          description="Soluciones eléctricas profesionales adaptadas a tus necesidades. Calidad, seguridad y experiencia en cada proyecto."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
