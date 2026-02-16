import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import { Gauge, Settings, Wrench, TrendingUp, Zap, ArrowRight, CheckCircle2, Factory, Home, Droplet, Package } from "lucide-react";

/**
 * Motores Eléctricos - Timeline Serpiente
 * Layout con timeline en zigzag y paleta azul
 */
export default function ElectricMotorsPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "motores-electricos");

  if (!service) return null;

  const timelineSteps = [
    { number: 1, title: "Diagnóstico inicial", description: "Evaluación completa del sistema eléctrico y estado del motor", icon: Gauge },
    { number: 2, title: "Análisis técnico", description: "Medición de parámetros y detección de fallas potenciales", icon: Settings },
    { number: 3, title: "Reparación/Instalación", description: "Trabajo especializado con herramientas de precisión", icon: Wrench },
    { number: 4, title: "Pruebas de calidad", description: "Verificación de funcionamiento óptimo y seguridad", icon: CheckCircle2 },
    { number: 5, title: "Optimización", description: "Ajustes finales para máxima eficiencia energética", icon: TrendingUp },
    { number: 6, title: "Entrega y puesta en marcha", description: "Activación y verificación final del sistema", icon: Zap },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      {/* Industrial pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${isDarkMode ? '#0ea5e9' : '#06b6d4'} 0, ${isDarkMode ? '#0ea5e9' : '#06b6d4'} 1px, transparent 0, transparent 50%)`,
        backgroundSize: '10px 10px'
      }} />
      
      {/* Glowing orbs azules */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="classic"
          showBackButton={true}
        />

        {/* Lugares de instalación */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className={`p-5 rounded-xl border-l-4 border-brand-cyan transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg shadow-brand-cyan/10"
              : "bg-white shadow-md shadow-brand-cyan/20"
          }`}>
            <Factory className="w-8 h-8 text-brand-cyan mb-2" />
            <p className={`text-base font-bold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>Fábricas</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Maquinaria industrial
            </p>
          </div>

          <div className={`p-5 rounded-xl border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg shadow-blue-500/10"
              : "bg-white shadow-md shadow-blue-500/20"
          }`}>
            <Package className="w-8 h-8 text-blue-500 mb-2" />
            <p className={`text-base font-bold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>Empacadoras</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Sistemas de empaque
            </p>
          </div>

          <div className={`p-5 rounded-xl border-l-4 border-cyan-500 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg shadow-cyan-500/10"
              : "bg-white shadow-md shadow-cyan-500/20"
          }`}>
            <Droplet className="w-8 h-8 text-cyan-500 mb-2" />
            <p className={`text-base font-bold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>Pozos</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Bombas de agua
            </p>
          </div>

          <div className={`p-5 rounded-xl border-l-4 border-blue-600 transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg shadow-blue-600/10"
              : "bg-white shadow-md shadow-blue-600/20"
          }`}>
            <Home className="w-8 h-8 text-blue-600 mb-2" />
            <p className={`text-base font-bold ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>Residencias</p>
            <p className={`text-xs ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
              Uso doméstico
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Columna principal con timeline serpiente */}
          <div className="lg:col-span-3 space-y-6">
            {/* Descripción */}
            <div className={`p-6 rounded-2xl border-l-4 border-brand-cyan relative overflow-hidden group transition-all duration-300 ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
                : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
            }`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan animate-pulse" />
              
              <p className={`text-lg leading-relaxed pl-4 ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                {service.description}
              </p>
            </div>

            {/* Timeline en serpiente (zigzag) */}
            <div className={`p-4 md:p-8 rounded-2xl ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg"
                : "bg-light-bg-secondary shadow-md"
            }`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}>
                Nuestro Proceso de Servicio
              </h3>
              
              {/* Grid para timeline serpiente */}
              <div className="relative">
                {/* Row 1: 1 → 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-brand-cyan/20 to-brand-cyan/5 border-brand-cyan/40 hover:border-brand-cyan"
                        : "bg-gradient-to-br from-brand-cyan/10 to-white border-brand-cyan/30 hover:border-brand-cyan"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          isDarkMode ? "bg-brand-cyan/30 text-brand-cyan-light" : "bg-brand-cyan text-white"
                        }`}>
                          1
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                            {timelineSteps[0].title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                            {timelineSteps[0].description}
                          </p>
                        </div>
                        {React.createElement(timelineSteps[0].icon, { className: "w-6 h-6 text-brand-cyan flex-shrink-0" })}
                      </div>
                    </div>
                    {/* Arrow right */}
                    <ArrowRight className={`hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 z-10 ${
                      isDarkMode ? "text-blue-400" : "text-blue-500"
                    }`} />
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-blue-500/40 hover:border-blue-500"
                        : "bg-gradient-to-br from-blue-100/50 to-white border-blue-300/30 hover:border-blue-500"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          isDarkMode ? "bg-blue-500/30 text-blue-400" : "bg-blue-500 text-white"
                        }`}>
                          2
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                            {timelineSteps[1].title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                            {timelineSteps[1].description}
                          </p>
                        </div>
                        {React.createElement(timelineSteps[1].icon, { className: "w-6 h-6 text-blue-500 flex-shrink-0" })}
                      </div>
                    </div>
                    {/* Arrow down */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-3 w-6 h-6 z-10">
                      <ArrowRight className={`w-6 h-6 rotate-90 ${isDarkMode ? "text-cyan-400" : "text-cyan-500"}`} />
                    </div>
                  </div>
                </div>

                {/* Row 2: 3 ← 4 (reversed) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Step 4 */}
                  <div className="relative md:order-1">
                    <div className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-blue-600/20 to-blue-600/5 border-blue-600/40 hover:border-blue-600"
                        : "bg-gradient-to-br from-blue-200/50 to-white border-blue-400/30 hover:border-blue-600"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          isDarkMode ? "bg-blue-600/30 text-blue-500" : "bg-blue-600 text-white"
                        }`}>
                          4
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                            {timelineSteps[3].title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                            {timelineSteps[3].description}
                          </p>
                        </div>
                        {React.createElement(timelineSteps[3].icon, { className: "w-6 h-6 text-blue-600 flex-shrink-0" })}
                      </div>
                    </div>
                    {/* Arrow down */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-3 w-6 h-6 z-10">
                      <ArrowRight className={`w-6 h-6 rotate-90 ${isDarkMode ? "text-brand-cyan-light" : "text-brand-cyan"}`} />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative md:order-2">
                    <div className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/40 hover:border-cyan-500"
                        : "bg-gradient-to-br from-cyan-100/50 to-white border-cyan-300/30 hover:border-cyan-500"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          isDarkMode ? "bg-cyan-500/30 text-cyan-400" : "bg-cyan-500 text-white"
                        }`}>
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                            {timelineSteps[2].title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                            {timelineSteps[2].description}
                          </p>
                        </div>
                        {React.createElement(timelineSteps[2].icon, { className: "w-6 h-6 text-cyan-500 flex-shrink-0" })}
                      </div>
                    </div>
                    {/* Arrow left */}
                    <ArrowRight className={`hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 z-10 rotate-180 ${
                      isDarkMode ? "text-blue-600" : "text-blue-600"
                    }`} />
                  </div>
                </div>

                {/* Row 3: 5 → 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Step 5 */}
                  <div className="relative">
                    <div className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-blue-400/20 to-blue-400/5 border-blue-400/40 hover:border-blue-400"
                        : "bg-gradient-to-br from-blue-50/50 to-white border-blue-200/30 hover:border-blue-400"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          isDarkMode ? "bg-blue-400/30 text-blue-300" : "bg-blue-400 text-white"
                        }`}>
                          5
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                            {timelineSteps[4].title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                            {timelineSteps[4].description}
                          </p>
                        </div>
                        {React.createElement(timelineSteps[4].icon, { className: "w-6 h-6 text-blue-400 flex-shrink-0" })}
                      </div>
                    </div>
                    {/* Arrow right */}
                    <ArrowRight className={`hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 z-10 ${
                      isDarkMode ? "text-cyan-400" : "text-cyan-500"
                    }`} />
                  </div>

                  {/* Step 6 */}
                  <div className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border-cyan-400/40 hover:border-cyan-400"
                      : "bg-gradient-to-br from-cyan-50/50 to-white border-cyan-200/30 hover:border-cyan-400"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        isDarkMode ? "bg-cyan-400/30 text-cyan-300" : "bg-cyan-400 text-white"
                      }`}>
                        6
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                          {timelineSteps[5].title}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                          {timelineSteps[5].description}
                        </p>
                      </div>
                      {React.createElement(timelineSteps[5].icon, { className: "w-6 h-6 text-cyan-400 flex-shrink-0" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - CTA */}
          <div className="lg:col-span-1">
            <div className={`p-8 rounded-2xl relative overflow-hidden ${
              isDarkMode
                ? "bg-gradient-to-br from-brand-cyan/20 via-blue-500/10 to-transparent shadow-lg shadow-brand-cyan/10"
                : "bg-gradient-to-br from-brand-cyan/10 via-blue-50 to-white shadow-md shadow-brand-cyan/20"
            }`}>
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">

                
                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? "text-dark-text" : "text-light-text"
                }`}>
                  ¿Necesitas servicio?
                </h3>
                <p className={`text-sm mb-6 ${
                  isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
                }`}>
                  Contáctanos para mantenimiento o reparación de motores
                </p>
                
                <div className="space-y-3">
                  <a
                    href="/contacto"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                      isDarkMode
                        ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light shadow-brand-cyan/30"
                        : "bg-brand-cyan-dark text-white hover:bg-brand-cyan shadow-brand-cyan/40"
                    }`}
                  >
                    Solicitar Cotización
                  </a>
                  
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl hover:scale-105 shadow-green-600/30"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Potencias disponibles */}
            <div className={`mt-6 p-6 rounded-xl ${
              isDarkMode
                ? "bg-dark-bg-secondary border border-blue-500/20"
                : "bg-light-bg-secondary border border-blue-500/30"
            }`}>
              <h4 className={`text-base font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Rango de Potencias
              </h4>
              <ul className="space-y-2 text-sm">
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  0.5 - 5 HP (Residencial)
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  5 - 50 HP (Comercial)
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  50+ HP (Industrial)
                </li>
              </ul>
            </div>

            {/* Tipos de motores */}
            <div className={`mt-6 p-6 rounded-xl ${
              isDarkMode
                ? "bg-dark-bg-secondary border border-cyan-500/20"
                : "bg-light-bg-secondary border border-cyan-500/30"
            }`}>
              <h4 className={`text-base font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
                Tipos de Motores
              </h4>
              <ul className="space-y-2 text-sm">
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Monofásicos
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  Trifásicos
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  DC / Corriente directa
                </li>
                <li className={`flex items-center gap-2 ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}>
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  Sumergibles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Galería de Motores - Similar a portones */}
      <div className="mb-16">
        <div className="mx-auto max-w-6xl px-2 sm:px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${
              isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
            }`}>
              <Zap className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className={`text-2xl font-bold ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}>
              Nuestros Trabajos
            </h2>
          </div>

          {/* Layout uniforme - Grid de tipos de motores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Motor Monofásico */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop" 
                  alt="Motor monofásico" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor Monofásico</h4>
                    <p className="text-white/90 text-xs">Aplicaciones domésticas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor Trifásico */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop" 
                  alt="Motor trifásico industrial" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor Trifásico</h4>
                    <p className="text-white/90 text-xs">Uso industrial</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor DC */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop" 
                  alt="Motor de corriente directa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor DC</h4>
                    <p className="text-white/90 text-xs">Corriente directa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor Sumergible */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop" 
                  alt="Motor sumergible para pozos" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Motor Sumergible</h4>
                    <p className="text-white/90 text-xs">Sistemas de agua</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bobinado y Reparación */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop" 
                  alt="Bobinado de motores" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Bobinado</h4>
                    <p className="text-white/90 text-xs">Reparación especializada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Variadores de Frecuencia */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop" 
                  alt="Variador de frecuencia" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Variadores</h4>
                    <p className="text-white/90 text-xs">Control de velocidad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mantenimiento Preventivo */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop" 
                  alt="Mantenimiento preventivo de motores" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Mantenimiento</h4>
                    <p className="text-white/90 text-xs">Preventivo y correctivo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnóstico y Análisis */}
            <div className="group relative">
              <div className={`overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                isDarkMode ? "bg-dark-surface" : "bg-gray-200"
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop" 
                  alt="Diagnóstico de fallas en motores" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">Diagnóstico</h4>
                    <p className="text-white/90 text-xs">Análisis de fallas</p>
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
