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
        "blog-green": "#5CB85C",
        text: "#373a3c",
      },
      boxShadow: {
        section: "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
      },
      dropShadow: {
        logo: "0px 1px 3px rgb(0 0 0 / 30%)",
      },
      fontSize: {
        logo: "3.5rem",
      },
    },
  },
  plugins: [],
};
