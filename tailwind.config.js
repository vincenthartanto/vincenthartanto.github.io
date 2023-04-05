/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1440px",
      },
      colors: {
        cyanColor: "#5FB4A2",
        darkBlueColor: "#203A4C",
        grayishDarkBlue: "#33323D",
        veryLightGrey: "#FAFAFA",
        lightGrey: "#EAEAEB",
        brightRed: "#F43030",
      },
    },
  },
  plugins: [],
};
