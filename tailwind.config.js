module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        admitted: "#106E8C",
        admitted1: "#106E8E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
