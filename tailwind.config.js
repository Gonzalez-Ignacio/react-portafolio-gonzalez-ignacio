/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131627",
        secondary: "#38004e",
        primaryGradient: {
         start: "#1e30f3",
         end: "#e21e80",
        },
      }
    },
  },
  plugins: [require("daisyui")],
}

