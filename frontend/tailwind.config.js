const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/**/*.html", "src/**/*.js", "src/**/*.jsx",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Anko', 'serif'], // Ganti 'Inter' dengan font yang Anda inginkan
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins:
    [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
    ],
}
