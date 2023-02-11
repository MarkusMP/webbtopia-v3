import {GetStaticProps} from 'next'
import {notFound} from 'next/navigation'
import {PreviewSuspense} from 'next-sanity/preview'

import {LazyPreviewPage} from '../page/LazyPreviewPage'
import {LoadingScreen} from '../page/LoadingScreen'
import {PageScreen} from '../page/PageScreen'
import {FOOTER_QUERY, HEADER_QUERY, HOME_PAGE_DATA_QUERY} from '../page/query'
import {FooterPayload, HeaderPayload, PageData} from '../page/types'
import {client} from '../sanity/client'

interface PageProps {
  data: PageData | null
  preview: boolean
  slug: string | null
  token: string | null
  locale?: string
  header: HeaderPayload
  footer: FooterPayload
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

// @ts-ignore
export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const {preview = false, previewData = {}, locale} = ctx

  const params = {slug: '/', language: locale === 'en' ? 'en' : 'sv'}

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: '/',
        token: previewData.token,
        locale: locale,
        header: null,
        footer: null,
      },
    }
  }

  const data = await client.fetch(HOME_PAGE_DATA_QUERY, {language: params.language})

  if (!data) {
    notFound()
  }

  const {header, footer}: any = await client.fetch(
    `{
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},

  }`,
    {language: params.language}
  )

  return {
    props: {
      header,
      data,
      preview,
      slug: params?.slug || null,
      token: null,
      locale: locale,
      footer,
    },
    revalidate: 60,
  }
}

export default function Page(props: PageProps) {
  const {data, preview, slug, token, locale, header, footer} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage
          slug={slug}
          token={token}
          locale={locale}
          canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${locale === 'en' ? '/' : '/sv'}`}
        />
      </PreviewSuspense>
    )
  }

  return (
    <PageScreen
      data={data}
      header={header}
      footer={footer}
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${locale === 'en' ? '/' : '/sv'}`}
    />
  )
}
