module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'paris': ['Parisienne', 'cursive'],
        'quiksand': ['Quicksand', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
      },
      maxWidth: {
        '64': '16rem',
      },
      maxHeight: {
        '700': '44rem',
      },
      minHeight: {
        '16': '4rem',
      },
      minHeight: {
        '16': '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
