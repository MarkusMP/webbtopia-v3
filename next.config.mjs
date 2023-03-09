/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer'
import sanityClient from '@sanity/client'
import {withPlausibleProxy} from 'next-plausible'

const bund = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
})

async function fetchSanityRedirects() {
  const data = await client.fetch(`*[_type == "redirects"]{ from, to, isPermanent, language }`)

  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.language === 'en' ? 'en/' : 'sv/'}${redirect.from}`,
      destination: `/${redirect.language === 'en' ? '' : 'sv/'}${redirect.to}`,
      permanent: redirect.isPermanent,
      locale: false,
    }
  })

  console.log(redirects)

  return redirects
}
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
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects()
    return sanityRedirects
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // {
          //   key: 'Content-Security-Policy',
          //   value: generateCsp(),
          // },
        ],
      },
    ]
  },

  reactStrictMode: true,
}

export default withPlausibleProxy()(bund(config))
