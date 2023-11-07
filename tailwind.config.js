/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F4DCFE",  // main-dark-mode
        secondary: "#B8B0E5",  // main-light-mode
        tertiary: "#734BFB",  // highlights in light mode
        "accent-dark": "#EFFF61", // highlights in dark mode
        "white-light": "#FCFCFD", // light mode background color
        "black-light": "#333333", // light mode text color
        "black-dark": "#1F2230",  // dark mode background color
        "white-dark": "#F5F6F8",  // dark mode text color
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "gray-100": "#E3E3E3",
        "pink-100": "#FFABC7"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",  // hero background
      // },
    },
  },
  plugins: [],
};

