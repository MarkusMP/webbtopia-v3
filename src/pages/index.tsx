import {GetStaticProps} from 'next'
import {notFound} from 'next/navigation'
import {PreviewSuspense} from 'next-sanity/preview'

import {LazyPreviewPage} from '../page/LazyPreviewPage'
import {LoadingScreen} from '../page/LoadingScreen'
import {PageScreen} from '../page/PageScreen'
import {HOME_PAGE_DATA_QUERY} from '../page/query'
import {PageData} from '../page/types'
import {client} from '../sanity/client'

interface PageProps {
  data: PageData | null
  preview: boolean
  slug: string | null
  token: string | null
  locale?: string
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

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
      },
    }
  }

  const data = await client.fetch(HOME_PAGE_DATA_QUERY, {language: params.language})

  if (!data) {
    notFound()
  }

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
      locale: locale,
    },
  }
}

export default function Page(props: PageProps) {
  const {data, preview, slug, token, locale} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage slug={slug} token={token} locale={locale} />
      </PreviewSuspense>
    )
  }

  return <PageScreen data={data} />
}
