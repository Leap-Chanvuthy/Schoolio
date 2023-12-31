/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : '#201E2C',
        secondary : '#1A2A39'
      },
      fontFamily:{
        Noto_Sans_Khmer : ['Noto Sans Khmer', 'sans-serif']
      }
    },
  },
  plugins: [],
}