import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * ServiceCTA - Componente Call-to-Action reutilizable
 * @param {string} variant - "sidebar", "banner", "card", "floating", "minimal", "bottom"
 */
export default function ServiceCTA({
  variant = "sidebar",
  title = "¿Te interesa este servicio?",
  description = "Contáctanos para una cotización personalizada sin compromiso",
  phoneNumber = "1234567890"
}) {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  // Variant: Sidebar (sticky lateral)
  if (variant === "sidebar") {
    return (
      <div className={`p-6 rounded-xl sticky top-6 ${
        isDarkMode
          ? "bg-dark-bg-secondary shadow-lg shadow-black/20"
          : "bg-light-bg-secondary shadow-md shadow-gray-300/50"
      }`}>
        <h3 className={`text-xl font-bold mb-4 ${
          isDarkMode ? "text-dark-text" : "text-light-text"
        }`}>
          {title}
        </h3>
        <p className={`text-sm mb-6 ${
          isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
        }`}>
          {description}
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
            {t("common.requestQuote")}
          </Link>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
              isDarkMode
                ? "border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10"
                : "border-brand-cyan-dark text-brand-cyan-dark hover:bg-brand-cyan/5"
            }`}
          >
            <Phone className="w-4 h-4" />
            {t("common.whatsapp")}
          </a>
        </div>

        <div className={`mt-4 pt-2 border-t ${
          isDarkMode ? "border-dark-bg-tertiary" : "border-light-bg-tertiary"
        }`}>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-base font-medium text-black marker:text-brand-cyan dark:text-white">{t("common.quickResponse")}</li>
            <li className="text-base font-medium text-black marker:text-brand-cyan dark:text-white">{t("common.freeQuote")}</li>
            <li className="text-base font-medium text-black marker:text-brand-cyan dark:text-white">{t("common.certifiedProfessionals")}</li>
          </ul>
        </div>
      </div>
    );
  }

  // Variant: Banner (full width destacado)
  if (variant === "banner") {
    return (
      <div className={`p-8 rounded-2xl text-center ${
        isDarkMode
          ? "bg-gradient-to-r from-brand-cyan/20 via-brand-cyan/10 to-brand-cyan/20"
          : "bg-gradient-to-r from-brand-cyan/10 via-brand-cyan/5 to-brand-cyan/10"
      }`}>
        <h3 className={`text-3xl font-bold mb-3 ${
          isDarkMode ? "text-dark-text" : "text-light-text"
        }`}>
          {title}
        </h3>
        <p className={`text-base mb-8 max-w-2xl mx-auto ${
          isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
        }`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contacto"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 ${
              isDarkMode
                ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light shadow-lg shadow-brand-cyan/30"
                : "bg-brand-cyan-dark text-white hover:bg-brand-cyan shadow-lg shadow-brand-cyan/30"
            }`}
          >
            <Mail className="w-5 h-5" />
            {t("common.requestQuote")}
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 border-2 ${
              isDarkMode
                ? "border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10"
                : "border-brand-cyan-dark text-brand-cyan-dark hover:bg-brand-cyan/5"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            {t("common.chatWhatsApp")}
          </a>
        </div>
      </div>
    );
  }

  // Variant: Card (tarjeta destacada)
  if (variant === "card") {
    return (
      <div className={`p-6 rounded-2xl border-2 ${
        isDarkMode
          ? "bg-dark-bg-secondary border-brand-cyan/30 shadow-lg shadow-brand-cyan/20"
          : "bg-light-bg-secondary border-brand-cyan/30 shadow-lg shadow-brand-cyan/20"
      }`}>
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-xl ${
            isDarkMode ? "bg-brand-cyan/20" : "bg-brand-cyan/10"
          }`}>
            <MessageCircle className="w-6 h-6 text-brand-cyan" />
          </div>
          <div className="flex-1">
            <h3 className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}>
              {title}
            </h3>
            <p className={`text-sm ${
              isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
            }`}>
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            to="/contacto"
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              isDarkMode
                ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light"
                : "bg-brand-cyan-dark text-white hover:bg-brand-cyan"
            }`}
          >
            <Mail className="w-4 h-4" />
            {t("common.quote")}
          </Link>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
              isDarkMode
                ? "border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10"
                : "border-brand-cyan-dark text-brand-cyan-dark hover:bg-brand-cyan/5"
            }`}
          >
            <Phone className="w-4 h-4" />
            {t("common.whatsapp")}
          </a>
        </div>
      </div>
    );
  }

  // Variant: Floating (flotante en esquina)
  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-50 max-w-sm">
        <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-sm ${
          isDarkMode
            ? "bg-dark-bg-secondary/95 border border-brand-cyan/30"
            : "bg-light-bg-secondary/95 border border-brand-cyan/30"
        }`}>
          <h4 className={`text-lg font-bold mb-2 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}>
            {title}
          </h4>
          <p className={`text-xs mb-4 ${
            isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
          }`}>
            {description}
          </p>

          <div className="flex gap-2">
            <Link
              to="/contacto"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                isDarkMode
                  ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light"
                  : "bg-brand-cyan-dark text-white hover:bg-brand-cyan"
              }`}
            >
              <Mail className="w-3 h-3" />
              {t("common.getQuote")}
            </Link>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                isDarkMode
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              <MessageCircle className="w-3 h-3" />
              {t("common.chat")}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Variant: Minimal (minimalista)
  if (variant === "minimal") {
    return (
      <div className={`p-6 rounded-xl ${
        isDarkMode ? "bg-dark-bg-tertiary" : "bg-light-bg-tertiary"
      }`}>
        <h4 className={`text-lg font-bold mb-4 ${
          isDarkMode ? "text-dark-text" : "text-light-text"
        }`}>
          {title}
        </h4>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/contacto"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isDarkMode
                ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light"
                : "bg-brand-cyan-dark text-white hover:bg-brand-cyan"
            }`}
          >
            <Mail className="w-4 h-4" />
            {t("common.contact")}
          </Link>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isDarkMode
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            {t("common.whatsapp")}
          </a>
        </div>
      </div>
    );
  }

  // Variant: Bottom (sticky al fondo)
  if (variant === "bottom") {
    return (
      <div className={`fixed bottom-0 left-0 right-0 z-40 p-4 ${
        isDarkMode
          ? "bg-dark-bg-secondary/95 backdrop-blur-lg border-t border-dark-border shadow-2xl"
          : "bg-light-bg-secondary/95 backdrop-blur-lg border-t border-light-border shadow-2xl"
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className={`text-lg font-bold ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}>
              {title}
            </h4>
            <p className={`text-sm ${
              isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
            }`}>
              {description}
            </p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <Link
              to="/contacto"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isDarkMode
                  ? "bg-brand-cyan text-dark-bg hover:bg-brand-cyan-light"
                  : "bg-brand-cyan-dark text-white hover:bg-brand-cyan"
              }`}
            >
              <Mail className="w-4 h-4" />
              {t("common.getQuote")}
            </Link>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isDarkMode
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              {t("common.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
