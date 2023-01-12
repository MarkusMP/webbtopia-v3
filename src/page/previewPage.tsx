import {usePreview} from '../sanity/preview'
import {PageScreen} from './PageScreen'
import {HOME_PAGE_DATA_QUERY, NOT_FOUND_PAGE_DATA_QUERY, PAGE_DATA_QUERY} from './query'

export default function PreviewPage(props: {
  slug: string | null
  token: string | null
  locale?: string
}) {
  const {slug, token, locale} = props

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
    />
  )
}
