module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      maxWidth: {
        content: '1110px',
      },
      height: {
        banner: '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
