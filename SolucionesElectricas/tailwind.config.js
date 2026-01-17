/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      colors: {
        // Paleta inspirada en el logo: Negro + Cyan
        brand: {
          cyan: "#22D3EE",
          "cyan-light": "#67E8F9",
          "cyan-dark": "#06B6D4",
          black: "#0F172A",
        },
        // Modo Claro
        light: {
          bg: "#FFFFFF",
          "bg-secondary": "#F8FAFC",
          "bg-tertiary": "#F1F5F9",
          text: "#0F172A",
          "text-secondary": "#334155",
          "text-muted": "#64748B",
          border: "#E2E8F0",
          accent: "#22D3EE",
        },
        // Modo Oscuro
        dark: {
          bg: "#0F172A",
          "bg-secondary": "#1E293B",
          "bg-tertiary": "#334155",
          text: "#F8FAFC",
          "text-secondary": "#E2E8F0",
          "text-muted": "#94A3B8",
          border: "#475569",
          accent: "#22D3EE",
        },
      },
    },
  },
  plugins: [],
});
