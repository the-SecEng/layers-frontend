/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: [ "./index.html",
  "./src/**/*.{vue, js, ts}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "neon-green":"#00ff00"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

