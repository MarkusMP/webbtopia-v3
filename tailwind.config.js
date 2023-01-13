const {theme} = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...theme,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#31AFF4',
      secondary: '#262C41',
      dark: '#1E1E1E',
      white: '#ffffff',
      background: '#F9FAFB',
      gray: '#585858',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
