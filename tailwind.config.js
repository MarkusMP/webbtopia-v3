const {theme} = require('@sanity/demo/tailwind')
const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...theme,
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        blinker: ['var(--font-blinker)', ...fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#31AFF4',
      primary_accent: '#0097DA',
      secondary: '#262C41',
      dark: '#1E1E1E',
      white: '#ffffff',
      background: '#F9FAFB',
      gray: '#585858',
      light_gray: '#E6E6E6',
    },

    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      none: '0',
      lg: '20px',
      full: '9999px',
      md: '0.375rem',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
