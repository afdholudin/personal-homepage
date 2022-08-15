/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "index.html",
    "404.html"
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      colors:{
        'primary' : '#048FF2',
        'secondary' : '#0378CC',
        'tertiary' : '#1DC8F0',
        'primary-dark': '#131718',
        'second-sect': '#262225',
        'last-sect': '#3D3A3B'
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
