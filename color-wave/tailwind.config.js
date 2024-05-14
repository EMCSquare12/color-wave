/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "blue-text": "#51CFF9",
      },
      boxShadow: {
        button: "2px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
