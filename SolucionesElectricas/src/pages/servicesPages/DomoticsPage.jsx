import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { Smartphone, Wifi, Zap, Lock } from "lucide-react";

/**
 * Domótica - Estilo Cards Modern
 * Layout moderno con cards y CTA integrado
 */
export default function DomoticsPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "domotica");

  if (!service) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      {/* Futuristic grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${isDarkMode ? '#1e293b' : '#e2e8f0'} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? '#1e293b' : '#e2e8f0'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="minimal"
        />

        {/* Descripción destacada con glass morphism */}
        <div className={`p-8 rounded-3xl mb-8 text-center backdrop-blur-xl border transition-all duration-300 hover:shadow-2xl ${
          isDarkMode
            ? "bg-dark-bg-secondary/70 border-brand-cyan/20 shadow-lg shadow-brand-cyan/10"
            : "bg-white/70 border-brand-cyan/30 shadow-xl"
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-purple-500/5 rounded-3xl" />
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto relative z-10 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}>
            {service.description}
          </p>
        </div>

        {/* Tech features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className={`p-5 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 hover:scale-110 group cursor-pointer ${
            isDarkMode
              ? "bg-dark-bg-secondary/50 border-brand-cyan/20 hover:border-brand-cyan/50 hover:bg-brand-cyan/5"
              : "bg-white/80 border-brand-cyan/30 hover:border-brand-cyan hover:bg-brand-cyan/5"
          }`}>
            <div className="inline-flex p-3 rounded-xl mb-2 bg-gradient-to-br from-brand-cyan/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-6 h-6 text-brand-cyan" />
            </div>
            <p className={`text-sm font-semibold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Control Móvil
            </p>
          </div>

          <div className={`p-5 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 hover:scale-110 group cursor-pointer ${
            isDarkMode
              ? "bg-dark-bg-secondary/50 border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/5"
              : "bg-white/80 border-purple-300 hover:border-purple-500 hover:bg-purple-50"
          }`}>
            <div className="inline-flex p-3 rounded-xl mb-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
              <Wifi className="w-6 h-6 text-purple-500" />
            </div>
            <p className={`text-sm font-semibold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              IoT Conectado
            </p>
          </div>

          <div className={`p-5 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 hover:scale-110 group cursor-pointer ${
            isDarkMode
              ? "bg-dark-bg-secondary/50 border-yellow-500/20 hover:border-yellow-500/50 hover:bg-yellow-500/5"
              : "bg-white/80 border-yellow-300 hover:border-yellow-500 hover:bg-yellow-50"
          }`}>
            <div className="inline-flex p-3 rounded-xl mb-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <p className={`text-sm font-semibold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Energía Inteligente
            </p>
          </div>

          <div className={`p-5 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 hover:scale-110 group cursor-pointer ${
            isDarkMode
              ? "bg-dark-bg-secondary/50 border-green-500/20 hover:border-green-500/50 hover:bg-green-500/5"
              : "bg-white/80 border-green-300 hover:border-green-500 hover:bg-green-50"
          }`}>
            <div className="inline-flex p-3 rounded-xl mb-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-6 h-6 text-green-500" />
            </div>
            <p className={`text-sm font-semibold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Seguridad 24/7
            </p>
          </div>
        </div>

        {/* CTA Card destacado */}
        <div className="mb-8">
          <ServiceCTA 
            variant="card"
            title="Automatiza tu hogar hoy mismo"
            description="Consulta con nuestros expertos y descubre cómo la domótica puede transformar tu vida diaria"
          />
        </div>

        {/* Características en cards */}
        <ServiceFeatures 
          features={service.features}
          variant="cards"
          title="Funcionalidades inteligentes"
        />
      </div>
    </div>
  );
}
