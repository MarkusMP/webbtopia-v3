/** @type {import('next').NextConfig} */
import sanityClient from '@sanity/client'
const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
})

async function fetchSanityRedirects() {
  const data = await client.fetch(`*[_type == "redirects"]{ from, to, isPermanent }`)

  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.from}`,
      destination: `/${redirect.to}`,
      permanent: redirect.isPermanent,
    }
  })

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
    console.log(sanityRedirects)
    return sanityRedirects
  },

  reactStrictMode: true,
}

export default config
