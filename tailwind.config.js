module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["shabnam", "sans-serif"],
      num: ["num", "sans-serif"]
    }
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"]
    }
  },
  plugins: []
};
