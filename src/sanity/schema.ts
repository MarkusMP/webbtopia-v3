import {SchemaTypeDefinition} from 'sanity'

import footerType from './global/footerType'
import headerType from './global/headerType'
import redirectsType from './global/redirectsType'
import dropDownItemType from './objects/dropDownItemType'
import dropDownType from './objects/dropDownType'
import footerLinksType from './objects/footerLinksType'
import workType from './objects/workType'
import {homePageType, notFoundPageType, pageType} from './page'
import hero from './sections/hero'
import notFound from './sections/notFound'
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
  ],
}
