import {SchemaTypeDefinition} from 'sanity'

import footerType from './global/footerType'
import headerType from './global/headerType'
import redirectsType from './global/redirectsType'
import blockContentType from './objects/blockContentType'
import blogCategory from './objects/blogCategory'
import dropDownItemType from './objects/dropDownItemType'
import dropDownType from './objects/dropDownType'
import featureItemType from './objects/featureItemType'
import footerLinksType from './objects/footerLinksType'
import servicesListItemType from './objects/servicesListItemType'
import workType from './objects/workType'
import {homePageType, notFoundPageType, pageType} from './page'
import {blogPageType} from './page/blogPageType'
import blogListPreview from './sections/blogListPreview'
import feature from './sections/feature'
import hero from './sections/hero'
import notFound from './sections/notFound'
import servicesList from './sections/servicesList'
import workList from './sections/workList'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    hero,
    pageType,
    notFound,
    homePageType,
    notFoundPageType,
    headerType,
    footerType,
    redirectsType,
    dropDownType,
    dropDownItemType,
    footerLinksType,
    workType,
    workList,
    servicesList,
    servicesListItemType,
    feature,
    featureItemType,
    blockContentType,
    blogPageType,
    blogCategory,
    blogListPreview,
  ],
}
