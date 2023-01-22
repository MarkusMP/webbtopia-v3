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
      ...,
      link-> {
        "slug": slug.current,
        language
      },
      workItemList[]-> {
       _id,
        description,
        image,
        title,
        link-> {
        "slug": slug.current,
        },
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
      ...,
      link-> {
        "slug": slug.current,
        language
      },
      workItemList[]-> {
       _id,
        description,
        image,
        title,
        link-> {
        "slug": slug.current,
        },
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
      ...,
      link-> {
        "slug": slug.current,
        language
      },
      workItemList[]-> {
       _id,
        description,
        image,
        title,
        link-> {
        "slug": slug.current,
        },
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
export const HEADER_QUERY = groq`
 *[_type == 'header' && language == $language][0]{
  btnText,
    image,
    link-> {
      "slug": slug.current,
      language
    },
    menuItems[] -> {
      _id,
      _type,
      "slug": slug.current,
      title,
      linkItems[] {
        _key,
        title,
        image,
        dropDownMenuItems[] -> {
          "slug": slug.current,
          title,
          _id,
        }
      }
    }
  }
`
export const FOOTER_QUERY = groq`
*[_type == 'footer' && language == $language][0]{
  emailText,
    image,
    socialTitle,
    social[],
      menuItems[] -> {
      _id,
      title,
      menuItems[] -> {
       _id,
      _type,
      "slug": slug.current,
      title,
      }
      }
  }
`
