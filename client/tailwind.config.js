/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
   
    extend: {
      colors: {
        primary: '#5FBDFF',
        secondary: '#96EFFF',
        lightColor: '#C5FFF8',
        headingColor:'#FF8F8F'
      }
    },
  },
  plugins: [
  ],
}

