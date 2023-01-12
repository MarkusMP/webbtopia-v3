/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'en',
  },

  reactStrictMode: true,
}

export default config
