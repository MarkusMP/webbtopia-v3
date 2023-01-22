import {usePreview} from '../sanity/preview'
import {BlogPageScreen} from './BlogPageScreen'
import {BLOG_PAGE_DATA_QUERY, FOOTER_QUERY, HEADER_QUERY} from './query'

export default function PreviewBlogPage(props: {
  slug: string | null
  token: string | null
  locale?: string
}) {
  const {slug, token, locale} = props

  return (
    <BlogPageScreen
      data={usePreview(token, BLOG_PAGE_DATA_QUERY, {
        slug: slug,
        language: locale,
      })}
      header={usePreview(token, HEADER_QUERY, {
        language: locale,
      })}
      footer={usePreview(token, FOOTER_QUERY, {
        language: locale,
      })}
    />
  )
}
