export interface Image {
  _type: string
  alt?: string
  asset: {
    _ref: string
    _types: string
  }
}

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
  content?: any[]
}

export interface HeroPayload {
  image?: Image
  title?: string
  description?: string
  btnText?: string
  link?: {slug?: string}
}

export interface HeaderPayload {
  btnText?: string
  image?: Image
  link?: {slug?: string; language: string}
  menuItems?: HeaderMenuItemPayload[]
}

export interface HeroPayload {
  title?: string
  description?: string
  link?: {slug?: string}
  btnText?: string
  image?: Image
}

export interface HeaderMenuItemPayload {
  linkItems?: HeaderLinkItemPayload[] | null
  slug: string
  title?: string
  _id?: string
  _type?: string
}

export interface HeaderLinkItemPayload {
  title?: string
  _key?: string
  image: Image
  dropDownMenuItems?: HeaderDropDownMenuItemsPayload[]
}

export interface HeaderDropDownMenuItemsPayload {
  _id?: string
  title?: string
  slug: string
}

export interface FooterPayload {
  emailText?: string
  image?: Image
  social?: socialItem[]
  socialTitle?: string
  menuItems: FooterMenuItems[]
}

export interface NotFoundSectionPayload {
  title?: string
  description?: string
}

export interface socialItem {
  _key?: string
  media?: string
  url?: string
}

export interface FooterMenuItems {
  _id: string
  title: string
  menuItems: HeaderMenuItemPayload[]
}

export interface IWorkList {
  btnText?: string
  description?: string
  descriptionTwo: string
  link?: {slug: string}
  title?: String
  _key?: string
  workItemList?: IWorkListItem[]
}

export interface IWorkListItem {
  image?: Image
  description?: string
  link?: {slug: string}
  _id?: string
  title?: string
}

export interface IServicesList {
  title?: string
  description?: string
  _key?: string
  _type?: string
  servicesItemList: IServicesListItem[]
}

export interface IServicesListItem {
  title?: string
  _key?: string
  link?: {slug: string}
}
