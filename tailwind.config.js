/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "sora": ["Sora", "sans-serif"],
      },
      colors : {
        darkBlue : '#0B65A7',
        lightBlue : 'rgb(59 130 246)',
        orange : '#F26A0E',
      },
      screens : {
          xl: '1440px',
      }
    },
  },
  plugins: [],
}

