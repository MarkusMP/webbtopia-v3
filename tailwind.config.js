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
      primary_accent: '#0097DA',
      secondary: '#262C41',
      dark: '#1E1E1E',
      white: '#ffffff',
      background: '#F9FAFB',
      gray: '#585858',
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
