import Head from 'next/head'

export function SiteMeta({
  description,
  image,
  title,
  noIndex = false,
}: {
  description?: string
  image?: string
  title?: string
  noIndex: boolean
}) {
  return (
    <Head>
      <title>{title && title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#F9FAFB" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#F9FAFB" />

      <meta key="description" name="description" content={description && description} />

      {image && <meta property="og:image" content={image} />}
      {noIndex && <meta key="robots" name="robots" content="noindex,follow" />}
      {noIndex && <meta key="googlebot" name="googlebot" content="noindex,follow" />}
    </Head>
  )
}
