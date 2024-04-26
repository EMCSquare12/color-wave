/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        "font-poppins": ["poppins", "sans-serif"],
        "font-mont": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
