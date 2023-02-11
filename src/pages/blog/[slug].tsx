import {GetStaticProps} from 'next'
import {notFound} from 'next/navigation'
import {PreviewSuspense} from 'next-sanity/preview'

import {BlogPageScreen} from '../../page/BlogPageScreen'
import {LazyPreviewBlogPage} from '../../page/LazyPreviewPage'
import {LoadingScreen} from '../../page/LoadingScreen'
import {
  BLOG_PAGE_DATA_QUERY,
  BLOG_PAGE_PATHS_QUERY_EN,
  FOOTER_QUERY,
  HEADER_QUERY,
} from '../../page/query'
import {FooterPayload, HeaderPayload, PageBlogData} from '../../page/types'
import {client} from '../../sanity/client'

interface PageProps {
  data: PageBlogData | null
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
  const {params = {}, preview = false, previewData = {}, locale} = ctx

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params.slug,
        token: previewData.token,
        locale: locale,
        header: null,
        footer: null,
      },
    }
  }

  const data = await client.fetch<PageBlogData | null>(BLOG_PAGE_DATA_QUERY, {
    slug: params.slug,
    language: locale === 'sv' ? 'sv' : 'en',
  })

  if (!data) {
    notFound()
  }

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
    revalidate: 60,
  }
}

export const getStaticPaths = async ({locales}: any) => {
  const pages = await client.fetch<{slug: string}[] | null>(BLOG_PAGE_PATHS_QUERY_EN)

  const paths = [] as any

  pages &&
    pages.map((el: any) => {
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
  const {data, preview, slug, token, locale, footer, header} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewBlogPage
          slug={slug}
          token={token}
          locale={locale}
          canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${
            locale === 'en' ? '/' : '/sv/'
          }blog/${slug}`}
        />
      </PreviewSuspense>
    )
  }

  return (
    <BlogPageScreen
      data={data}
      footer={footer}
      header={header}
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${locale === 'en' ? '/' : '/sv/'}blog/${slug}`}
    />
  )
}
