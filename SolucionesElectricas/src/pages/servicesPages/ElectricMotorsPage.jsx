import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { Gauge, Settings, Wrench, TrendingUp } from "lucide-react";

/**
 * Motores Eléctricos - Estilo Timeline Industrial
 * Layout con timeline y CTA minimalista
 */
export default function ElectricMotorsPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "motores-electricos");

  if (!service) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      {/* Industrial pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${isDarkMode ? '#fff' : '#000'} 0, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 0, transparent 50%)`,
        backgroundSize: '10px 10px'
      }} />
      
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="classic"
        />

        {/* Stats industriales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className={`p-5 rounded-xl border-l-4 border-orange-500 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg"
              : "bg-white shadow-md"
          }`}>
            <Gauge className="w-8 h-8 text-orange-500 mb-2" />
            <p className="text-2xl font-bold text-orange-500">99.9%</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Eficiencia
            </p>
          </div>

          <div className={`p-5 rounded-xl border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg"
              : "bg-white shadow-md"
          }`}>
            <Settings className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-blue-500">24/7</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Soporte
            </p>
          </div>

          <div className={`p-5 rounded-xl border-l-4 border-green-500 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg"
              : "bg-white shadow-md"
          }`}>
            <Wrench className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-2xl font-bold text-green-500">+10</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              AñosExp.
            </p>
          </div>

          <div className={`p-5 rounded-xl border-l-4 border-purple-500 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg"
              : "bg-white shadow-md"
          }`}>
            <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-2xl font-bold text-purple-500">100+</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Proyectos
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Columna principal más ancha */}
          <div className="lg:col-span-3 space-y-6">
            {/* Descripción con barra de acento */}
            <div className={`p-6 rounded-xl border-l-4 border-brand-cyan relative overflow-hidden group transition-all duration-300 ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
                : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
            }`}>
              {/* Animated gradient bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan animate-pulse" />
              
              <p className={`text-lg leading-relaxed pl-4 ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                {service.description}
              </p>
            </div>

            {/* Características en timeline */}
            <ServiceFeatures 
              features={service.features}
              variant="timeline"
              title="Nuestro proceso de servicio"
            />
          </div>

          {/* Sidebar más estrecho - CTA minimalista */}
          <div className="lg:col-span-1">
            <ServiceCTA 
              variant="minimal"
              title="Contáctanos"
            />
            
            {/* Quick info */}
            <div className={`mt-6 p-4 rounded-xl ${
              isDarkMode ? "bg-dark-bg-tertiary" : "bg-light-bg-tertiary"
            }`}>
              <h4 className={`text-sm font-bold mb-3 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Servicios Rápidos
              </h4>
              <ul className="space-y-2 text-xs">
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  Diagnóstico express
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  Reparación urgente
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  Mantenimiento preventivo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
