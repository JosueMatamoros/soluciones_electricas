import React from "react";
import { useTheme } from "../context/ThemeContext";
import ServiceCard from "../components/common/ServiceCard";
import SectionHeader from "../components/common/SectionHeader";
import { Zap, Plug, Cog, Wind, Droplets, Home } from "lucide-react";

function ServicesPage() {
  const { isDarkMode } = useTheme();

  const services = [
    {
      id: "instalaciones-residenciales",
      title: "Instalaciones eléctricas residenciales y generales",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
    },
    {
      id: "climatizacion",
      title: "Instalación y mantenimiento de sistemas de climatización",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
    },
    {
      id: "domotica",
      title: "Sistemas de domótica y dispositivos inteligentes",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
    },
    {
      id: "motores-electricos",
      title: "Instalación y revisión de motores eléctricos",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
    },
    {
      id: "portones-automaticos",
      title: "Instalación y programación de portones eléctricos",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
    },
    {
      id: "sistemas-piscinas",
      title: "Instalación de sistemas para piscinas",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
    },
  ];

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
          {services.map((service) => (
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
