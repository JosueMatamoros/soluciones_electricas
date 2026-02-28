import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import ServiceCTA from "../../components/services/ServiceCTA";
import ServiceFeatureCard from "../../components/services/ServiceFeatureCard";
import FAQAccordion from "../../components/common/FAQAccordion";
import { BadgeCheck, Hammer, MessageCircle } from "lucide-react";

/**
 * Instalaciones Residenciales - Estilo Classic
 * Layout clásico con sidebar CTA
 */
export default function ResidentialInstallationsPage() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const service = SERVICES.find((s) => s.id === "instalaciones-residenciales");

  if (!service) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      {/* Decorative background blurs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-cyan-dark/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <ServiceHero
          title={t("services.detail.instalaciones-residenciales.heroTitle")}
          image={service.image}
          icon={service.icon}
          variant="classic"
          showBackButton={true}
        />

        {/* Stats badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div
            className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? "bg-dark-bg-secondary/50 border-brand-cyan/20 shadow-lg shadow-brand-cyan/10"
                : "bg-white/80 border-brand-cyan/30 shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-cyan/10">
                <BadgeCheck className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}
                >
                  {t("services.detail.instalaciones-residenciales.stats.quality.title")}
                </p>
                <p className="text-xs text-brand-cyan">{t("services.detail.instalaciones-residenciales.stats.quality.subtitle")}</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? "bg-dark-bg-secondary/50 border-brand-cyan/20 shadow-lg shadow-brand-cyan/10"
                : "bg-white/80 border-brand-cyan/30 shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-cyan/10">
                <Hammer className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}
                >
                  {t("services.detail.instalaciones-residenciales.stats.custom.title")}
                </p>
                <p className="text-xs text-brand-cyan">
                  {t("services.detail.instalaciones-residenciales.stats.custom.subtitle")}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? "bg-dark-bg-secondary/50 border-brand-cyan/20 shadow-lg shadow-brand-cyan/10"
                : "bg-white/80 border-brand-cyan/30 shadow-md"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-cyan/10">
                <MessageCircle className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"}`}
                >
                  {t("services.detail.instalaciones-residenciales.stats.communication.title")}
                </p>
                <p className="text-xs text-brand-cyan">
                  {t("services.detail.instalaciones-residenciales.stats.communication.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Descripción con diseño mejorado */}
            <div
              className={`p-8 rounded-2xl border relative overflow-hidden group transition-all duration-300 hover:shadow-xl ${
                isDarkMode
                  ? "bg-dark-bg-secondary shadow-lg shadow-black/20 border-dark-border hover:border-brand-cyan/30"
                  : "bg-light-bg-secondary shadow-md shadow-gray-300/50 border-light-border hover:border-brand-cyan/30"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-cyan-light to-brand-cyan" />
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode
                    ? "text-dark-text-secondary"
                    : "text-light-text-secondary"
                }`}
              >
                {t("services.detail.instalaciones-residenciales.description")}
              </p>
            </div>

            {/* Grid 2x2 de características destacadas */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceFeatureCard
                badge="Residencial"
                title="Instalación Residencial"
                description="Tableros eléctricos modernos con protecciones para viviendas"
                image="/images/instalacion-residencial.jpg"
              />
              <ServiceFeatureCard
                badge="Comercial"
                title="Instalación Comercial"
                description="Sistemas eléctricos de alta potencia para locales comerciales y oficinas"
                image="/images/instalacion-comercial.jpg"
              />
              <ServiceFeatureCard
                badge="Iluminación"
                title="Iluminación Interior"
                description="Diseño e instalación de iluminación eficiente y moderna"
                image="/temporales/iluminacion-interior.jpg"
              />
              <ServiceFeatureCard
                badge="Iluminación"
                title="Iluminación Exterior"
                description="Soluciones de iluminación para exteriores, jardines y fachadas"
                image="/images/iluminacion-exterior.jpg"
              />
            </div>

            {/* Características */}
            <ServiceFeatures features={t("services.detail.instalaciones-residenciales.features", { returnObjects: true })} variant="list" />
          </div>

          {/* Sidebar - CTA */}
          <div className="lg:col-span-1">
            <ServiceCTA
              variant="sidebar"
              title={t("services.detail.instalaciones-residenciales.cta.title")}
              description={t("services.detail.instalaciones-residenciales.cta.description")}
            />
            {/* FAQ solo en pantallas grandes */}
            <div className="mt-7">
              <FAQAccordion
                faqs={t("services.detail.instalaciones-residenciales.faq", { returnObjects: true })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
