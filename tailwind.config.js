/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FFC107",
          light: "#FFF9E6",
          dark: "#111111",
        },
      },
    },
    plugins: [],
  };
  