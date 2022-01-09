module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#00080f',
      },
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        md: '5rem',
        lg: '10rem',
        xl: '15rem',
      },
    },
    fontFamily: {
      sans: ['Public Sans', '-apple-system', 'system-ui', 'Roboto'],
    },
  },
  plugins: [],
};
