import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar archivos de traducción
import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
};

// Obtener idioma guardado o usar 'es' por defecto
const savedLanguage = localStorage.getItem("language") || "es";

i18n
  .use(initReactI18next) // Conecta i18next con React
  .init({
    resources,
    lng: savedLanguage, // Idioma guardado o por defecto
    fallbackLng: "es", // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

export default i18n;
