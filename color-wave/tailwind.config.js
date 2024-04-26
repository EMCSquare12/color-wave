/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", "sans-serif"],
        "mont": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
