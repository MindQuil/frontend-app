/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#32de84',
        white: 'rgb(255, 255, 255)',
        limeGreen: 'rgb(0, 128, 0)',
        darkGreen: 'rgb(2, 20, 2)',
        offwhite: '#faf9f6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
