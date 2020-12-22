module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Grey
        grey1 : '#FFFFFF',
        grey2 : '#FDFEFF',
        grey3 : '#FAFAFA',
        grey4 : '#E7E9F2',
        grey5 : '#E8F0F0',
        grey6 : '#EEEFF2',
        
        // Primary
        primary1 : '#116466',
        primary2 : '#289295',
        primary3 : '#7BBBBC',
        primary4 : '#D1E8E2',

        // Semantic
        sematic1 : '#F15446',

        // Content tones
        content1 : '#1F211B',
        content2 : '#7F88A5',
        content3 : '#C2C9DF'
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
