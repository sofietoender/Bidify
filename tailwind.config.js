module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        beige: "#F6F4F0",
        red: "#D6482C",
        customblack: "#161613",
        brown: "#A58063",
        gray: "#AFA9A4",
      },
    },
  },
  plugins: [],
};
