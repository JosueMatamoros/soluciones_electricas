import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { Waves, Sun, Lightbulb, Thermometer } from "lucide-react";

/**
 * Sistemas de Piscinas - Estilo Bottom CTA
 * Layout con CTA sticky en la parte inferior
 */
export default function PoolSystemsPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "sistemas-piscinas");

  if (!service) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-24 relative overflow-hidden ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      {/* Animated water ripples */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-blue-400/5 via-cyan-400/10 to-blue-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-0 w-full h-40 bg-gradient-to-r from-cyan-400/5 via-blue-500/10 to-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="overlay"
          description={service.description}
        />

        {/* Pool features con iconos temáticos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 hover:border-blue-400/60"
              : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 hover:border-blue-500"
          }`}>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Waves className="w-10 h-10 text-blue-500 relative z-10 mx-auto" />
            </div>
            <h4 className={`font-bold text-center mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Filtración
            </h4>
            <p className={`text-xs text-center ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Agua cristalina siempre
            </p>
          </div>

          <div className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
            isDarkMode
              ? "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-400/30 hover:border-yellow-400/60"
              : "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 hover:border-yellow-500"
          }`}>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Sun className="w-10 h-10 text-yellow-500 relative z-10 mx-auto" />
            </div>
            <h4 className={`font-bold text-center mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Calefacción
            </h4>
            <p className={`text-xs text-center ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Temperatura ideal
            </p>
          </div>

          <div className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
            isDarkMode
              ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/30 hover:border-cyan-400/60"
              : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-300 hover:border-cyan-500"
          }`}>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Lightbulb className="w-10 h-10 text-cyan-500 relative z-10 mx-auto" />
            </div>
            <h4 className={`font-bold text-center mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Iluminación LED
            </h4>
            <p className={`text-xs text-center ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Ambiente espectacular
            </p>
          </div>

          <div className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/30 hover:border-purple-400/60"
              : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300 hover:border-purple-500"
          }`}>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Thermometer className="w-10 h-10 text-purple-500 relative z-10 mx-auto" />
            </div>
            <h4 className={`font-bold text-center mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Control Auto
            </h4>
            <p className={`text-xs text-center ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Gestión inteligente
            </p>
          </div>
        </div>

        {/* Descripción con estilo wave */}
        <div className={`p-8 rounded-3xl mb-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
          isDarkMode
            ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
            : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
        }`}>
          {/* Wave decoration */}
          <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
              <path d="M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z" className="fill-brand-cyan" opacity="0.3">
                <animate attributeName="d" dur="5s" repeatCount="indefinite"
                  values="M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z" />
              </path>
              <path d="M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z" className="fill-brand-cyan-light" opacity="0.2">
                <animate attributeName="d" dur="7s" repeatCount="indefinite"
                  values="M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z" />
              </path>
            </svg>
          </div>
          
          <p className={`text-lg leading-relaxed relative z-10 mt-4 ${
            isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
          }`}>
            {service.description}
          </p>
        </div>

        {/* Características en cards */}
        <ServiceFeatures 
          features={service.features}
          variant="cards"
          title="Servicios especializados para tu piscina"
        />
      </div>

      {/* CTA Bottom sticky */}
      <ServiceCTA 
        variant="bottom"
        title="¿Listo para disfrutar de tu piscina?"
        description="Instalación profesional con garantía"
      />
    </div>
  );
}
