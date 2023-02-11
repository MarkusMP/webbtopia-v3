import {groq} from 'next-sanity'

export const PAGE_DATA_QUERY = groq`
  *[_type == 'page' && slug.current == $slug && language == $language][0]{
    title,
    slug,
    language,
    indexPage,
    descriptionSEO,
    titleSEO,
    ogImage,
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
      },
      servicesItemList[] {
        _key,
        title,
        link-> {
          "slug": slug.current,
        },
      },
      blogListPreview[]-> {
        image,
        _id,
        title,
        description,
        "slug": slug.current,
      },
      blogPost->{
        title,
        description,
        image,
        _id,
        "slug": slug.current,
        authorInfo,
        authorImage,
        publishedAt
      },
      blogListFeature[]-> {
        _id,
        "slug": slug.current,
        title,
      },
      blogList[]-> {
        image,
        _id,
        title,
        "slug": slug.current,
        categories-> {
          _id,
          title
        }
      },
      workCase-> {
        title,
        description,
        image,
        link-> {
          "slug": slug.current,
        },
      },
      workList[]-> {
        image,
        _id,
        title,
        description,
        link-> {
          "slug": slug.current,
        },
        categories-> {
          _id,
          title
        }
      },
      techList[]-> {
        _id,
        description,
        image,
        link-> {
          "slug": slug.current,
        },
      },
      techListTwo[]-> {
        _id,
        description,
        btnText,
        info,
        image,
        link-> {
          "slug": slug.current,
        },
      },
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
    ogImage,
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
      },
      servicesItemList[] {
        _key,
        title,
        link-> {
          "slug": slug.current,
        },
      },
      blogListPreview[]-> {
        image,
        _id,
        title,
        description,
        "slug": slug.current,
      },
      
    }
  }
`
export const BLOG_PAGE_DATA_QUERY = groq`
  *[_type == 'blog' && slug.current == $slug && language == $language][0]{
    title,
    slug,
    language,
    indexPage,
    descriptionSEO,
    titleSEO,
    ogImage,
    image,
    body
  }
`
export const NOT_FOUND_PAGE_DATA_QUERY = groq`
  *[_type == 'notFound' && language == $language][0]{
    title,
    slug,
    descriptionSEO,
    titleSEO,
    ogImage,
    content[]{
      ...,
      link-> {
        "slug": slug.current,
        language
      },
    }
  }
`
export const PAGE_PATHS_QUERY = groq`
  *[_type == 'page' && defined(slug.current)]{
    'slug': slug.current,
    language
  }
`
export const WORK_PATHS_QUERY = groq`
  *[_type == 'work' && defined(slug.current)]{
    'slug': slug.current,
    language
  }
`
export const BLOG_PAGE_PATHS_QUERY_EN = groq`
  *[_type == 'blog' && language == 'en' && defined(slug.current)]{
    'slug': slug.current,
    language
  }
`
export const BLOG_PAGE_PATHS_QUERY_SV = groq`
  *[_type == 'blog' && language == 'sv' && defined(slug.current)]{
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
