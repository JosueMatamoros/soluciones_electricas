import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { ShieldCheck, Radio, Fingerprint, Clock } from "lucide-react";

/**
 * Portones Automáticos - Estilo Split Screen
 * Layout split con imagen y contenido lado a lado, CTA flotante
 */
export default function AutomaticGatesPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "portones-automaticos");

  if (!service) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      {/* Animated security lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        {/* Hero split screen */}
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="split"
          description={service.description}
        />

        {/* Security features highlight */}
        <div className={`p-8 rounded-3xl mb-8 relative overflow-hidden border-2 ${
          isDarkMode
            ? "bg-gradient-to-br from-dark-bg-secondary via-dark-bg-tertiary to-dark-bg-secondary border-brand-cyan/30"
            : "bg-gradient-to-br from-white via-gray-50 to-white border-brand-cyan/40"
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
          
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}>
            Seguridad y Tecnología
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center group">
              <div className={`inline-flex p-4 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isDarkMode ? "bg-green-500/10" : "bg-green-100"
              }`}>
                <ShieldCheck className="w-8 h-8 text-green-500" />
              </div>
              <p className={`font-semibold mb-1 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Protección Total
              </p>
              <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                Sensores de seguridad
              </p>
            </div>

            <div className="text-center group">
              <div className={`inline-flex p-4 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isDarkMode ? "bg-blue-500/10" : "bg-blue-100"
              }`}>
                <Radio className="w-8 h-8 text-blue-500" />
              </div>
              <p className={`font-semibold mb-1 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Control Remoto
              </p>
              <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                Hasta 100m distancia
              </p>
            </div>

            <div className="text-center group">
              <div className={`inline-flex p-4 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isDarkMode ? "bg-purple-500/10" : "bg-purple-100"
              }`}>
                <Fingerprint className="w-8 h-8 text-purple-500" />
              </div>
              <p className={`font-semibold mb-1 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Acceso Inteligente
              </p>
              <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                Biométrico opcional
              </p>
            </div>

            <div className="text-center group">
              <div className={`inline-flex p-4 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isDarkMode ? "bg-orange-500/10" : "bg-orange-100"
              }`}>
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <p className={`font-semibold mb-1 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Instalación Rápida
              </p>
              <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                En 1-2 días
              </p>
            </div>
          </div>
        </div>

        {/* Características en grid */}
        <div className="mt-8">
          <ServiceFeatures 
            features={service.features}
            variant="grid"
            title="Características del servicio"
          />
        </div>

        {/* CTA flotante */}
        <ServiceCTA 
          variant="floating"
          title="¿Quieres automatizar tu portón?"
          description="Respuesta rápida y servicio profesional"
        />
      </div>
    </div>
  );
}
