import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { Snowflake, Wind, Wrench } from "lucide-react";
import AirConditioningModels from "../../components/services/AirConditioningModels";
import AirConditioningComparisonSection from "../../components/services/AirConditioningComparisonSection";
import AirConditioningDecisionHelper from "../../components/services/AirConditioningDecisionHelper";

/**
 * Climatización - Estilo Banner Top
 * Layout con CTA banner superior destacado
 */
export default function AirConditioningPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "climatizacion");

  if (!service) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="classic"
          showBackButton={true}
        />

        {/* Info cards con iconos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isDarkMode
              ? "bg-gradient-to-br from-dark-bg-secondary to-dark-bg-tertiary border-blue-500/20 hover:border-blue-500/40"
              : "bg-gradient-to-br from-white to-blue-50 border-blue-200 hover:border-blue-400"
          }`}>
            <div className={`inline-flex p-3 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
              isDarkMode ? "bg-blue-500/10" : "bg-blue-100"
            }`}>
              <Snowflake className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Instalación Profesional
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Servicio rápido y eficiente para confort
            </p>
          </div>

          <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isDarkMode
              ? "bg-gradient-to-br from-dark-bg-secondary to-dark-bg-tertiary border-cyan-500/20 hover:border-cyan-500/40"
              : "bg-gradient-to-br from-white to-cyan-50 border-cyan-200 hover:border-cyan-400"
          }`}>
            <div className={`inline-flex p-3 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
              isDarkMode ? "bg-cyan-500/10" : "bg-cyan-100"
            }`}>
              <Wind className="w-6 h-6 text-cyan-500" />
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Limpieza Profunda
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Limpieza profunda y preventiva de equipos
            </p>
          </div>

          <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isDarkMode
              ? "bg-gradient-to-br from-dark-bg-secondary to-dark-bg-tertiary border-sky-500/20 hover:border-sky-500/40"
              : "bg-gradient-to-br from-white to-sky-50 border-sky-200 hover:border-sky-400"
          }`}>
            <div className={`inline-flex p-3 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
              isDarkMode ? "bg-sky-500/10" : "bg-sky-100"
            }`}>
              <Wrench className="w-6 h-6 text-sky-500" />
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Reparación de Aires
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Solución rápida y eficiente de averías
            </p>
          </div>
        </div>

        {/* CTA Banner superior */}
        <div className="mb-8">
          <ServiceCTA
            variant="banner"
            title="¿Necesitas instalar o restaurar tu aire acondicionado?"
            description="Obtén una cotización inmediata y programa tu servicio con nuestros técnicos especializados"
          />
        </div>

        {/* Características en grid */}
        <ServiceFeatures
          features={service.features}
          variant="grid"
          title="Todo lo que necesitas saber"
        />
        {/* Modelos de aire acondicionado */}
        <AirConditioningModels />

        <AirConditioningComparisonSection />
        <AirConditioningDecisionHelper />
      </div>
    </div>
  );
}
