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
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

