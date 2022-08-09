/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "index.html"
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#048FF2',
        'secondary' : '#0378CC',
        'tertiary' : '#1DC8F0',
        'primary-dark': '#131718'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}
