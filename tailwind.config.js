/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#354F52',
        'grey-l':'#CAD2C5',
        'green-bg':'#52796F',
        'grey-bg':'#2F3E46',
        'png':'#BDA047',
      'light-green':'#84A98C'
      },
      fontFamily:{
        'arabic':['"Al Qalam Quran"']
      },
      spacing: {
        '120': '30rem',
      }
    },
    container:{
      center: true,
    },

  },
  plugins: [],
}