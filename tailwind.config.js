/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-maroon': '#984A47',
        'yellow-l':'#E9C87B',
        'green-bg':'#233239',
        'navy-bg':'#161220',
        'png':'#BDA047'
      },
    },
    container:{
      center: true,
    },

  },
  plugins: [],
}