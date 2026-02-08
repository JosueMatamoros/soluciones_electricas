import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import SmartDeviceCard from "../../components/services/SmartDeviceCard";
import { Lightbulb, Camera, DoorOpen, Blinds, Speaker, Thermometer, ArrowLeft, Smartphone, Cpu } from "lucide-react";

/**
 * Domótica - Estilo Cards Modern
 * Layout moderno con cards y CTA integrado
 */
export default function DomoticsPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "domotica");

  if (!service) return null;

  const smartDevices = [
    {
      title: "Interruptores Inteligentes",
      description: "Control total de la iluminación desde tu smartphone. Programa horarios, crea escenas y ahorra energía automáticamente.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      title: "Cámaras WiFi",  
      description: "Vigilancia en tiempo real desde cualquier lugar. Detección de movimiento, visión nocturna y grabación en la nube.",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      title: "Control de Portones",
      description: "Abre y cierra tu portón remotamente. Integra con sistemas de seguridad y recibe notificaciones de acceso.",
      icon: DoorOpen,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      title: "Automatización de Persianas",
      description: "Control automático según la hora del día o temperatura. Programa aperturas y cierres para máximo confort.",
      icon: Blinds,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      title: "Asistentes de Voz",
      description: "Controla todos tus dispositivos con comandos de voz. Compatible con Alexa, Google Assistant y más.",
      icon: Speaker,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      title: "Termostatos Inteligentes",
      description: "Control preciso de temperatura con aprendizaje automático. Optimiza el consumo y mantén el confort ideal.",
      icon: Thermometer,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
  ];

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
      
      {/* Glowing orbs - azules/celestes */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="overlay"
          showBackButton={true}
        />

        {/* CTA claro y limpio */}
        <div className="mb-8">
          <div className={`relative p-8 rounded-3xl overflow-hidden border ${
            isDarkMode
              ? "bg-dark-bg-secondary/50 backdrop-blur-sm border-brand-cyan/20"
              : "bg-white/90 backdrop-blur-sm border-brand-cyan/30 shadow-lg"
          }`}>
            {/* Decorative elements sutiles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
              }`}>
                <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
                <span className={`text-sm font-semibold ${isDarkMode ? "text-brand-cyan-light" : "text-brand-cyan-dark"}`}>
                  Disponible ahora
                </span>
              </div>
              
              <h3 className={`text-3xl font-bold mb-3 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}>
                Automatiza tu hogar hoy mismo
              </h3>
              <p className={`text-base mb-8 ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                Consulta con nuestros expertos y descubre cómo transformar tu vida diaria
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <a
                  href="/contacto"
                  className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                    isDarkMode
                      ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light shadow-brand-cyan/30"
                      : "bg-brand-cyan-dark text-white hover:bg-brand-cyan shadow-brand-cyan/40"
                  }`}
                >
                  Solicitar Cotización
                  <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl hover:scale-105 shadow-green-600/30"
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

        {/* Dispositivos inteligentes - con icono y alineado a la izquierda */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${
              isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
            }`}>
              <Smartphone className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className={`text-2xl font-bold ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}>
              Dispositivos Inteligentes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartDevices.map((device, index) => (
              <SmartDeviceCard
                key={index}
                title={device.title}
                description={device.description}
                icon={device.icon}
                image={device.image}
              />
            ))}
          </div>
        </div>

        {/* Funcionalidades - movidas abajo */}
        <ServiceFeatures 
          features={service.features}
          variant="cards"
          title="Funcionalidades inteligentes"
        />
      </div>
    </div>
  );
}
