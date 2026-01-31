import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { SERVICES } from "../data/services";
import { ArrowLeft, CheckCircle2, Zap, Mail, Phone } from "lucide-react";

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}>
            Servicio no encontrado
          </h2>
          <Link
            to="/servicios"
            className="text-brand-cyan hover:text-brand-cyan-light"
          >
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? "bg-dark-bg" : "bg-light-bg"
    }`}>
      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10">
        {/* Botón volver */}
        <button
          onClick={() => navigate("/servicios")}
          className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "text-dark-text hover:bg-dark-bg-secondary"
              : "text-light-text hover:bg-light-bg-secondary"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a servicios
        </button>

        {/* Hero Section */}
        <div className={`rounded-2xl overflow-hidden mb-8 ${
          isDarkMode
            ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
            : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
        }`}>
          {/* Imagen con overlay */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              isDarkMode
                ? "bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"
                : "bg-gradient-to-t from-light-bg via-light-bg/50 to-transparent"
            }`} />

            {/* Título y icono sobre la imagen */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${
                  isDarkMode
                    ? "bg-brand-cyan/20 backdrop-blur-sm"
                    : "bg-brand-cyan/10 backdrop-blur-sm"
                }`}>
                  <Icon className="w-8 h-8 text-brand-cyan" strokeWidth={1.5} />
                </div>
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                isDarkMode ? "text-white" : "text-dark-bg"
              }`}>
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Descripción */}
            <div className={`p-6 rounded-xl ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
                : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
            }`}>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                {service.description}
              </p>
            </div>

            {/* Características */}
            <div className={`p-6 rounded-xl ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
                : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
            }`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}>
                <Zap className="w-6 h-6 text-brand-cyan" />
                Características del servicio
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className={isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beneficios */}
            <div className={`p-6 rounded-xl ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
                : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}>
                Beneficios
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    isDarkMode ? "bg-dark-bg-tertiary" : "bg-light-bg-tertiary"
                  }`}>
                    <p className={`text-sm font-medium ${
                      isDarkMode ? "text-dark-text" : "text-light-text"
                    }`}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - CTA */}
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-xl sticky top-6 ${
              isDarkMode
                ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
                : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}>
                ¿Te interesa este servicio?
              </h3>
              <p className={`text-sm mb-6 ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}>
                Contáctanos para una cotización personalizada sin compromiso
              </p>

              <div className="space-y-3">
                <Link
                  to="/contacto"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light"
                      : "bg-brand-cyan-dark text-white hover:bg-brand-cyan"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Solicitar cotización
                </Link>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
                    isDarkMode
                      ? "border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10"
                      : "border-brand-cyan-dark text-brand-cyan-dark hover:bg-brand-cyan/5"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <div className={`mt-6 pt-6 border-t ${
                isDarkMode ? "border-dark-bg-tertiary" : "border-light-bg-tertiary"
              }`}>
                <p className={`text-xs ${
                  isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
                }`}>
                  • Respuesta en menos de 24 horas
                  <br />
                  • Cotización gratuita
                  <br />
                  • Profesionales certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
