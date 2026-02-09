import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import { Waves, Droplets, Lightbulb, Thermometer, ArrowRight, Camera } from "lucide-react";

export default function PoolSystemsPage() {
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "sistemas-piscinas");

  if (!service) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 pb-10 relative overflow-hidden ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-blue-400/5 via-cyan-400/10 to-blue-400/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-0 w-full h-40 bg-gradient-to-r from-cyan-400/5 via-blue-500/10 to-cyan-400/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={service.title}
          image={service.image}
          icon={service.icon}
          variant="overlay"
          showBackButton={true}
        />

        <div className="mt-8 mb-8">
          <div
            className={`relative p-8 rounded-3xl overflow-hidden backdrop-blur-sm ${
              isDarkMode
                ? "bg-dark-surface/50 border border-brand-cyan/20"
                : "bg-white/50 border border-brand-cyan/30 shadow-lg"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z"
                  className="fill-brand-cyan"
                  opacity="0.3"
                >
                  <animate
                    attributeName="d"
                    dur="5s"
                    repeatCount="indefinite"
                    values="M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z;
                            M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z;
                            M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z"
                  />
                </path>
                <path
                  d="M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z"
                  className="fill-brand-cyan-light"
                  opacity="0.2"
                >
                  <animate
                    attributeName="d"
                    dur="7s"
                    repeatCount="indefinite"
                    values="M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z;
                            M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z;
                            M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z"
                  />
                </path>
              </svg>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center ">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
                  isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/30"
                }`}
              >
                <Waves className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-brand-cyan-light" : "text-brand-cyan-dark"
                  }`}
                >
                  Especialistas en piscinas
                </span>
              </div>

              <h3
                className={`text-3xl font-bold mb-1 ${
                  isDarkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                ¿Listo para disfrutar de tu piscina?
              </h3>
              <p
                className={`text-base mb-6 ${
                  isDarkMode
                    ? "text-dark-text-secondary"
                    : "text-light-text-secondary"
                }`}
              >
                Instalación profesional con garantía completa. Consulta sin
                compromiso.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto w-full">
                <a
                  href="/contacto"
                  className={`group flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                    isDarkMode
                      ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light shadow-brand-cyan/30"
                      : "bg-brand-cyan-dark text-white hover:bg-brand-cyan shadow-brand-cyan/40"
                  }`}
                >
                  Solicitar Cotización
                  <ArrowRight className="h-5 w-6 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl hover:scale-105 shadow-green-600/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div
            className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 hover:border-blue-400/60"
                : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 hover:border-blue-500"
            }`}
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Waves className="w-10 h-10 text-blue-500 relative z-10 mx-auto" />
            </div>
            <h4
              className={`font-bold text-center mb-2 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Filtración
            </h4>
            <p
              className={`text-xs text-center ${
                isDarkMode
                  ? "text-dark-text-secondary"
                  : "text-light-text-secondary"
              }`}
            >
              Agua cristalina siempre
            </p>
          </div>

          <div
            className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
              isDarkMode
                ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/30 hover:border-cyan-400/60"
                : "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-300 hover:border-cyan-500"
            }`}
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Droplets className="w-10 h-10 text-cyan-500 relative z-10 mx-auto" />
            </div>
            <h4
              className={`font-bold text-center mb-2 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Tratamiento
            </h4>
            <p
              className={`text-xs text-center ${
                isDarkMode
                  ? "text-dark-text-secondary"
                  : "text-light-text-secondary"
              }`}
            >
              Balance químico perfecto
            </p>
          </div>

          <div
            className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
              isDarkMode
                ? "bg-gradient-to-br from-brand-cyan/10 to-blue-400/10 border-brand-cyan/30 hover:border-brand-cyan/60"
                : "bg-gradient-to-br from-brand-cyan/20 to-blue-50 border-brand-cyan/40 hover:border-brand-cyan"
            }`}
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Lightbulb className="w-10 h-10 text-brand-cyan relative z-10 mx-auto" />
            </div>
            <h4
              className={`font-bold text-center mb-2 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Iluminación LED
            </h4>
            <p
              className={`text-xs text-center ${
                isDarkMode
                  ? "text-dark-text-secondary"
                  : "text-light-text-secondary"
              }`}
            >
              Ambiente espectacular
            </p>
          </div>

          <div
            className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-600/10 to-cyan-400/10 border-blue-500/30 hover:border-blue-500/60"
                : "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-400/40 hover:border-blue-600"
            }`}
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Thermometer className="w-10 h-10 text-blue-600 relative z-10 mx-auto" />
            </div>
            <h4
              className={`font-bold text-center mb-2 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Control Auto
            </h4>
            <p
              className={`text-xs text-center ${
                isDarkMode
                  ? "text-dark-text-secondary"
                  : "text-light-text-secondary"
              }`}
            >
              Gestión inteligente
            </p>
          </div>
        </div>

        <div
          className={`px-8 pb-4 pt-2 rounded-3xl mb-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
              : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z"
                className="fill-brand-cyan"
                opacity="0.3"
              >
                <animate
                  attributeName="d"
                  dur="5s"
                  repeatCount="indefinite"
                  values="M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z"
                />
              </path>
              <path
                d="M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z"
                className="fill-brand-cyan-light"
                opacity="0.2"
              >
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  values="M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,0 600,20 T1200,20 L1200,0 L0,0 Z;
                          M0,20 Q300,40 600,20 T1200,20 L1200,0 L0,0 Z"
                />
              </path>
            </svg>
          </div>

          <p
            className={`text-lg leading-relaxed relative z-10 mt-4 ${
              isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
            }`}
          >
            {service.description}
          </p>
        </div>

        <ServiceFeatures
          features={service.features}
          variant="cards"
          title="Servicios especializados para tu piscina"
        />

        <div className="mt-8 mb-4">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`p-3 rounded-xl ${
                isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
              }`}
            >
              <Camera className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2
              className={`text-2xl font-bold ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Nuestros Proyectos de Piscinas
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2">
                <div
                  className={`group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 ${
                    isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                  } h-[320px]`}
                >
                  <img
                    src="/temporales/piscinas-jacuzzis.png"
                    alt="Piscina Residencial Premium"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-white text-xl font-bold mb-2">
                        Piscina Residencial Premium
                      </h4>
                      <p className="text-white/90 text-sm">
                        Sistema completo de filtración y climatización
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  className={`group overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-3 ${
                    isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                  } h-[320px]`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&auto=format&fit=crop"
                    alt="Iluminación LED"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white text-base font-bold mb-1">
                        Iluminación LED
                      </h4>
                      <p className="text-white/90 text-xs">
                        Sistema RGB multicolor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div
                className={`group overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-2 ${
                  isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                } h-[240px]`}
              >
                <img
                  src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&auto=format&fit=crop"
                  alt="Filtración"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white text-sm font-bold mb-1">
                      Filtración Avanzada
                    </h4>
                    <p className="text-white/90 text-xs">
                      Sistema de purificación
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1 ${
                    isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                  } h-[240px]`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&auto=format&fit=crop"
                    alt="Piscina con Jacuzzi"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white text-lg font-bold mb-1">
                        Piscina con Jacuzzi
                      </h4>
                      <p className="text-white/90 text-sm">
                        Diseño moderno con cascada
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`group overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 ${
                  isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                } h-[240px]`}
              >
                <img
                  src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&auto=format&fit=crop"
                  alt="Climatización"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white text-sm font-bold mb-1">
                      Climatización Total
                    </h4>
                    <p className="text-white/90 text-xs">
                      Control de temperatura
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`group overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-3 ${
                  isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                } h-[280px]`}
              >
                <img
                  src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&auto=format&fit=crop"
                  alt="Piscina Natural"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-base font-bold mb-1">
                      Piscina Natural
                    </h4>
                    <p className="text-white/90 text-xs">
                      Filtración ecológica
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div
                  className={`group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1 ${
                    isDarkMode ? "bg-dark-surface" : "bg-gray-200"
                  } h-[280px]`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&auto=format&fit=crop"
                    alt="Piscina Infinity"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-white text-xl font-bold mb-2">
                        Piscina Infinity
                      </h4>
                      <p className="text-white/90 text-sm">
                        Borde infinito con vista panorámica
                      </p>
                    </div>
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
