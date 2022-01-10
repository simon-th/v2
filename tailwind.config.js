module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#001221',
        highlight: '#021b30',
      },
      strokeWidth: {
        1.5: '1.5',
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
