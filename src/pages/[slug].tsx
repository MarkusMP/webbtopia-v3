import {GetStaticProps} from 'next'
import {notFound} from 'next/navigation'
import {PreviewSuspense} from 'next-sanity/preview'

import {LazyPreviewPage} from '../page/LazyPreviewPage'
import {LoadingScreen} from '../page/LoadingScreen'
import {PageScreen} from '../page/PageScreen'
import {PAGE_DATA_QUERY, PAGE_PATHS_QUERY} from '../page/query'
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
  const {params = {}, preview = false, previewData = {}, locale} = ctx

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params.slug,
        token: previewData.token,
        locale: locale,
      },
    }
  }

  const data = await client.fetch<PageData | null>(PAGE_DATA_QUERY, {
    slug: params.slug,
    language: locale === 'sv' ? 'sv' : 'en',
  })

  if (!data) {
    notFound()
  }

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
      locale,
    },
  }
}

export const getStaticPaths = async ({locales}: any) => {
  const pages = await client.fetch<{slug: string}[] | null>(PAGE_PATHS_QUERY)

  const paths = [] as any

  pages!.map((el: any) => {
    return locales.map((locale: any) => {
      if (el.language === 'sv' && locale === 'sv') {
        return paths.push({params: {slug: `${el.slug}`}, locale})
      } else if (el.language === 'en' && locale === 'en') {
        return paths.push({params: {slug: `${el.slug}`}, locale})
      } else {
        return
      }
    })
  })

  return {
    paths,
    fallback: false,
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
