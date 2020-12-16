module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mygreen: "#289295",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        robotomono: ["Roboto Mono", "monospace"],
      },
      borderRadius: {
        'p2' : 2
      },
      tracking : {
        'wide1' : '1em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
