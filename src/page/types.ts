export interface PageElement {
  _key: string
  _type: 'article'
  supertitle?: string
  title?: string
  subtitle?: string
}

export interface PageData {
  title?: string
  slug?: {current?: string}
  titleSEO?: string
  descriptionSEO?: string
  indexPage?: boolean
  _type?: string
  content?: PageElement[]
}
