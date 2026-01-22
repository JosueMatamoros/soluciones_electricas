import React from "react";
import { useTheme } from "../context/ThemeContext";
import ServiceCard from "../components/common/ServiceCard";

function ServicesPage() {
  const { isDarkMode } = useTheme();

  const services = [
    {
      id: "instalaciones-residenciales",
      title: "Instalaciones eléctricas residenciales y generales",
      icon: "🏠",
    },
    {
      id: "climatizacion",
      title: "Instalación y mantenimiento de sistemas de climatización",
      icon: "❄️",
    },
    {
      id: "domotica",
      title: "Sistemas de domótica y dispositivos inteligentes",
      icon: "💡",
    },
    {
      id: "motores-electricos",
      title: "Instalación y revisión de motores eléctricos",
      icon: "⚙️",
    },
    {
      id: "portones-automaticos",
      title: "Instalación y programación de portones eléctricos",
      icon: "🚪",
    },
    {
      id: "sistemas-piscinas",
      title: "Instalación de sistemas para piscinas",
      icon: "🏊",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Nuestros Servicios
          </h1>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
            }`}
          >
            Soluciones eléctricas profesionales adaptadas a tus necesidades. Calidad,
            seguridad y experiencia en cada proyecto.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
