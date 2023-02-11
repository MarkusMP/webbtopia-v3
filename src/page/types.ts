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
  ogImage?: Image
}
export interface PageBlogData {
  title?: string
  slug?: {current?: string}
  titleSEO?: string
  descriptionSEO?: string
  indexPage?: boolean
  _type?: string
  body?: any[]
  image?: Image
  ogImage?: Image
}

export interface HeroPayload {
  image?: Image
  title?: string
  description?: string
  descriptionTwo?: string
  btnText?: string
  link?: {slug?: string}
}

export interface HeroTwoPayload {
  image?: Image
  title?: string
  description?: string
  descriptionTwo?: string
  btnText?: string
  link?: {slug?: string}
}

export interface HeroThreePayload {
  image?: Image
  title?: string
  description?: string
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

export interface IFeature {
  title?: string
  description?: string
  btnText?: string
  link?: {slug: string}
  image?: Image
  featureItemList?: IFeatureItem[]
}

export interface IFeatureItem {
  _key?: string
  title?: string
  subTitle?: string
}

export interface IFeatureTwo {
  subTitle?: string
  title?: string
  titleTwo?: string
  description?: string
  descriptionTwo?: string
  image?: Image
  featureItemList?: IFeatureItem[]
}
export interface IFeatureThree {
  title?: string
  description?: string
  image?: Image
}

export interface IBlogListPreview {
  title?: string
  subTitle?: string
  description?: string
  btnText?: string
  link?: {slug: string}
  blogListPreview?: IBlogListPreviewItem[]
}
export interface IBlogListPreviewItem {
  title?: string
  description?: string
  slug?: string
  _id?: string
  image?: Image
}

export interface IContact {
  title?: string
  subTitle?: string
  description?: string
  descriptionTwoTitle?: string
  descriptionTwo?: string
  image?: Image
  info?: string
  email?: string
  btnText?: string
  formText?: string
}

export interface IBlogFeature {
  title?: string
  blogListFeature?: IBlogListFeatureItem[]
  blogPost?: IBlogPostItem
}

export interface IBlogListItem {
  categories?: {_id?: string; title?: string}
  image?: Image
  slug?: string
  title?: string
  _id?: string
}

export interface IBlogListFeatureItem {
  _id?: string
  slug?: string
  title?: string
}

export interface IBlogPostItem {
  authorImage?: Image
  authorInfo?: string
  publishedAt?: any
  description?: string
  image?: Image
  slug?: string
  title?: string
  _id?: string
}

export interface IBlogList {
  blogList?: IBlogListItem[]
}

export interface IWorkFeature {
  title?: string
  description?: string
  workCase: IWorkCase
  workList: IAllWorkList[]
}

export interface IAllWorkList {
  categories?: {_id?: string; title?: string}
  image?: Image
  link?: {slug?: string}
  title?: string
  description?: string
  _id?: string
}

export interface IWorkCase {
  image?: Image
  title?: string
  description?: string
  link?: {slug?: string}
}

export interface IFaq {
  title?: string
  description?: string
  faqList: IFaqItem[]
}

export interface IFaqItem {
  title?: string
  description?: string
  _key?: string
}
export interface IFaqTwo {
  title?: string
  faqListTwo: IFaqItemTwo[]
}

export interface IFaqItemTwo {
  title?: string
  description?: string
  _key?: string
}

export interface ITechnologiesList {
  title?: string
  techList?: ITechnologiesListItem[]
}
export interface ITechnologiesListTwo {
  title?: string
  description?: string
  techListTwo?: ITechnologiesListItem[]
}

export interface ITechnologiesListItem {
  image?: Image
  _id?: string
  description?: string
  info?: string
  btnText?: string
  link?: {slug?: string}
}

export interface IFeatureCaseStudy {
  title?: string
  description?: string
  image?: Image
  name?: string
  btnText?: string
  url?: string
  featureCaseStudyCardList?: IFeatureCaseStudyList[]
}

export interface IFeatureCaseStudyList {
  title?: string
  _key?: string
  linkItems?: IFeatureCaseStudyListItem[]
}

export interface IFeatureCaseStudyListItem {
  description?: string
  _key?: string
}
