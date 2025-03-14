/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'],  
        'roboto': ['"Roboto"', 'sans-serif'],  
      },
      colors: {
        'main-dark-bg': '#334155',
        'secundary-dark-bg': '#64748b',
        'main-light-bg': '#FAFAFA',
        'secundary-light-bg': '#FFFFFF',
        'dark-button': '#020202',
        'light-button': '#29AAE3',
      },
    },
  },
  plugins: [],
});