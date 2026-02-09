import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { ShieldCheck, Radio, Fingerprint, Clock, ArrowRight, Image } from "lucide-react";

/**
 * Portones Automáticos - Estilo Split Screen con CTA sticky
 * Layout split con CTA mejorado en esquina superior derecha
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
          showBackButton={true}
        />

        {/* CTA mejorado - Prioridad arriba */}
        <div className="mt-8 mb-8">
          <div className={`p-8 rounded-3xl border relative overflow-hidden ${
            isDarkMode
              ? "bg-dark-bg-secondary/50 backdrop-blur-sm border-brand-cyan/20"
              : "bg-white/90 backdrop-blur-sm border-brand-cyan/30 shadow-lg"
          }`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 ${
                    isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
                  }`}>
                    <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
                    <span className={`text-sm font-semibold ${isDarkMode ? "text-brand-cyan-light" : "text-brand-cyan-dark"}`}>
                      Respuesta rápida
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? "text-dark-text" : "text-light-text"
                  }`}>
                    ¿Quieres automatizar tu portón?
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
                  }`}>
                    Instalación profesional con respuesta rápida
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a
                    href="/contacto"
                    className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                      isDarkMode
                        ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light shadow-brand-cyan/30"
                        : "bg-brand-cyan-dark text-white hover:bg-brand-cyan shadow-brand-cyan/40"
                    }`}
                  >
                    Cotizar ahora
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth="2" />
                  </a>
                  
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl hover:scale-105 shadow-green-600/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security features highlight - paleta azul */}
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
                isDarkMode ? "bg-brand-cyan/10" : "bg-brand-cyan/20"
              }`}>
                <ShieldCheck className="w-8 h-8 text-brand-cyan" />
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
                Desde cualquier lugar
              </p>
            </div>

            <div className="text-center group">
              <div className={`inline-flex p-4 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isDarkMode ? "bg-cyan-500/10" : "bg-cyan-100"
              }`}>
                <Fingerprint className="w-8 h-8 text-cyan-500" />
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
                isDarkMode ? "bg-blue-600/10" : "bg-blue-200"
              }`}>
                <Clock className="w-8 h-8 text-blue-600" />
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
        <div className="mt-8 mb-8">
          <ServiceFeatures 
            features={service.features}
            variant="grid"
            title="Características del servicio"
          />
        </div>

        {/* Información adicional para llenar espacios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className={`p-6 rounded-xl border ${
            isDarkMode
              ? "bg-gradient-to-br from-brand-cyan/10 to-transparent border-brand-cyan/20"
              : "bg-gradient-to-br from-brand-cyan/5 to-white border-brand-cyan/30"
          }`}>
            <h4 className={`font-bold mb-3 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Motores de Alta Potencia
            </h4>
            <p className={`text-sm mb-4 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Instalamos motores industriales para portones de hasta 600kg.
            </p>
            <ul className="space-y-2 text-xs">
              <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                Corredizos y batientes
              </li>
              <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Residencial e industrial
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20"
              : "bg-gradient-to-br from-blue-100/50 to-white border-blue-300/30"
          }`}>
            <h4 className={`font-bold mb-3 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Controles Modernos
            </h4>
            <p className={`text-sm mb-4 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Control remoto RF, smartphone y acceso biométrico para máxima comodidad.
            </p>
            <ul className="space-y-2 text-xs">
              <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                App móvil incluida
              </li>
              <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Control de accesos
              </li>
            </ul>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDarkMode
              ? "bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20"
              : "bg-gradient-to-br from-cyan-100/50 to-white border-cyan-300/30"
          }`}>
            <h4 className={`font-bold mb-3 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              Soporte Técnico
            </h4>
            <p className={`text-sm mb-4 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Reparaciones y mantenimiento preventivo para tu portón.
            </p>
            <ul className="space-y-2 text-xs">
              <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Mantenimiento preventivo
              </li>
              <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Reparaciones urgentes
              </li>
            </ul>
          </div>
        </div>

        {/* Galería Extravagante de Portones - Layout Tipo Mosaico */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${
              isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
            }`}>
              <Image className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className={`text-2xl font-bold ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}>
              Nuestras Instalaciones
            </h2>
          </div>

          {/* Layout uniforme - Grid de tipos de motores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Motor de Brazo */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop" 
                  alt="Motor de brazo para portón" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor de Brazo</h4>
                    <p className="text-white/90 text-xs">Portones batientes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor de Cremallera */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop" 
                  alt="Motor de cremallera para portón corredizo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor Cremallera</h4>
                    <p className="text-white/90 text-xs">Portones corredizos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor Industrial */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&auto=format&fit=crop" 
                  alt="Motor industrial alta potencia" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor Industrial</h4>
                    <p className="text-white/90 text-xs">Hasta 600kg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor Subterráneo */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop" 
                  alt="Motor subterráneo para portón" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor Subterráneo</h4>
                    <p className="text-white/90 text-xs">Instalación oculta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control WiFi */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" 
                  alt="Control WiFi inteligente" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Control WiFi</h4>
                    <p className="text-white/90 text-xs">Acceso remoto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Táctil */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=900&auto=format&fit=crop" 
                  alt="Panel táctil control de acceso" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Panel Táctil</h4>
                    <p className="text-white/90 text-xs">Control de accesos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sensores de Seguridad */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop" 
                  alt="Sensores de seguridad para portón" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Sensores</h4>
                    <p className="text-white/90 text-xs">Máxima seguridad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Central de Control */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop" 
                  alt="Central de control para portones" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Central Control</h4>
                    <p className="text-white/90 text-xs">Gestión completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
