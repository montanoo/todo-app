/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        inAnimation: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        outAnimation: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        inAnimation: "inAnimation 1s ease-in-out",
        outAnimation: "outAnimation 1s ease-out",
      },
      fontFamily: {
        inter: ["Inter var"],
      },
    },
  },
  plugins: [],
};
