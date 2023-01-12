import {groq} from 'next-sanity'

export const PAGE_DATA_QUERY = groq`
  *[_type == 'page' && slug.current == $slug && language == $language][0]{
    title,
    slug,
    language,
    indexPage,
    descriptionSEO,
    titleSEO,
    content[]{
      _key,
      _type == 'pageElement' => {
        ...article->{
          _type,
          supertitle,
          title,
          subtitle
        }
      }
    }
  }
`
export const HOME_PAGE_DATA_QUERY = groq`
  *[_type == 'home' && language == $language][0]{
    title,
    slug,
    language,
    descriptionSEO,
    titleSEO,
    content[]{
      _key,
      _type == 'pageElement' => {
        ...article->{
          _type,
          supertitle,
          title,
          subtitle
        }
      }
    }
  }
`
export const NOT_FOUND_PAGE_DATA_QUERY = groq`
  *[_type == 'notFound' && language == $language][0]{
    title,
    slug,
    descriptionSEO,
    titleSEO,
    content[]{
      _key,
      _type == 'pageElement' => {
        ...article->{
          _type,
          supertitle,
          title,
          subtitle
        }
      }
    }
  }
`

export const PAGE_PATHS_QUERY = groq`
  *[_type == 'page' && defined(slug.current)]{
    'slug': slug.current,
    language
  }
`
