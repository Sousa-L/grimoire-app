// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: ["class"], // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontVariant: {
        smallcaps: 'small-caps',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}