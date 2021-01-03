module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        85: '0.85',
        60: '0.6',
      },
      colors: {
        primary: '#121212',
      },
      screens: {
        xs: '320px',
      },
      maxWidth: {
        content: '1110px',
      },
      height: {
        'sm:banner': '20rem',
        banner: '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
