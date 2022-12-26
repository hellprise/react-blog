/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        green: "#5CB85C",
      },
    },
  },
  plugins: [],
};
