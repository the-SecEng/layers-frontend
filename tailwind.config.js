/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ "./index.html",
  "./src/**/*.{vue, js, ts}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
      colors: {
        "neon-green":"#00ff00"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

