const {theme} = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      blinker: 'var(--font-blinker)',
      roboto: 'var(--font-roboto)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
