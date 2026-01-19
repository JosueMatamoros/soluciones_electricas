import React from "react";
import { useTheme } from "../context/ThemeContext";
import ServiceCard from "../components/common/ServiceCard";

function ServicesPage() {
  const { isDarkMode } = useTheme();

  const services = [
    {
      id: "instalaciones-residenciales",
      title: "Instalaciones eléctricas residenciales y generales",
      description:
        "Diseño e instalación completa de sistemas eléctricos para hogares, oficinas y espacios comerciales con los más altos estándares de calidad y seguridad.",
      icon: "🏠",
    },
    {
      id: "reparacion-averias",
      title: "Reparación de averías eléctricas",
      description:
        "Diagnóstico rápido y reparación eficiente de fallas eléctricas. Servicio de emergencia disponible para solucionar problemas urgentes en tu instalación eléctrica.",
      icon: "🔧",
    },
    {
      id: "motores-electricos",
      title: "Instalación y revisión de motores eléctricos",
      description:
        "Instalación profesional, mantenimiento preventivo y correctivo de motores eléctricos industriales y comerciales para garantizar su óptimo funcionamiento.",
      icon: "⚙️",
    },
    {
      id: "portones-automaticos",
      title: "Automatización de portones eléctricos",
      description:
        "Instalación y automatización de portones eléctricos con sistemas modernos de apertura y cierre. Control remoto, sensores y sistemas de seguridad integrados.",
      icon: "🚪",
    },
    {
      id: "climatizacion",
      title: "Instalación y mantenimiento de sistemas de climatización",
      description:
        "Instalación experta de sistemas de aire acondicionado y climatización. Mantenimiento preventivo y correctivo para máxima eficiencia y durabilidad.",
      icon: "❄️",
    },
    {
      id: "sistemas-piscinas",
      title: "Instalaciones eléctricas para sistemas de piscinas",
      description:
        "Instalaciones eléctricas especializadas para piscinas, incluyendo iluminación submarina, sistemas de filtrado y calefacción cumpliendo normas de seguridad.",
      icon: "🏊",
    },
    {
      id: "domotica",
      title: "Instalación de sistemas domóticos y dispositivos inteligentes",
      description:
        "Transforme su hogar u oficina en un espacio inteligente con sistemas domóticos. Control de iluminación, seguridad, climatización y más desde su smartphone.",
      icon: "💡",
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
                description={service.description}
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
