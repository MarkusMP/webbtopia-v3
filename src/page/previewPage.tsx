import {usePreview} from '../sanity/preview'
import {PageScreen} from './PageScreen'
import {
  FOOTER_QUERY,
  HEADER_QUERY,
  HOME_PAGE_DATA_QUERY,
  NOT_FOUND_PAGE_DATA_QUERY,
  PAGE_DATA_QUERY,
} from './query'

export default function PreviewPage(props: {
  slug: string | null
  token: string | null
  locale?: string
  canonical?: string | null
}) {
  const {slug, token, locale, canonical} = props

  return (
    <PageScreen
      data={usePreview(
        token,
        slug === null
          ? NOT_FOUND_PAGE_DATA_QUERY
          : slug === '/' || slug === '/sv'
          ? HOME_PAGE_DATA_QUERY
          : PAGE_DATA_QUERY,
        {
          slug: slug,
          language: locale,
        }
      )}
      canonical={canonical}
      header={usePreview(token, HEADER_QUERY, {
        language: locale,
      })}
      footer={usePreview(token, FOOTER_QUERY, {
        language: locale,
      })}
    />
  )
}
