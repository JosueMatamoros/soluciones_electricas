/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merryweather: ["Merryweather", "serif"],
      },
      colors: {
        'main-dark-bg': '#1F2937',
        'secundary-dark-bg': '#6B7280',
        'main-light-bg': '#FFFFFF',
        'secundary-light-bg': '#F9F9F9',
      },
    },
  },
  plugins: [],
});