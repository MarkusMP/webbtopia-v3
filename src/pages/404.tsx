import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'

import {LazyPreviewPage} from '../page/LazyPreviewPage'
import {LoadingScreen} from '../page/LoadingScreen'
import {PageScreen} from '../page/PageScreen'
import {FOOTER_QUERY, HEADER_QUERY, NOT_FOUND_PAGE_DATA_QUERY} from '../page/query'
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

  const params = {slug: null}

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params?.slug || null,
        token: previewData.token,
        locale: locale,
      },
    }
  }

  const data = await client.fetch(NOT_FOUND_PAGE_DATA_QUERY, {language: locale})

  const {header, footer}: any = await client.fetch(
    `{
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},

  }`,
    {language: locale}
  )

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
      locale,
      header,
      footer,
    },
  }
}

export default function Custom404(props: PageProps) {
  const {data, preview, slug, token, locale, header, footer} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage slug={slug} token={token} locale={locale} />
      </PreviewSuspense>
    )
  }

  return <PageScreen data={data} header={header} footer={footer} />
}
