/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,tsx,ts,jsx,html}', './dist/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['josefin']
      },
      colors: {
        'myfiol': '#b21b8a'
      }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}

