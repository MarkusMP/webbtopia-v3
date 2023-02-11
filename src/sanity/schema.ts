import {SchemaTypeDefinition} from 'sanity'

import footerType from './global/footerType'
import headerType from './global/headerType'
import redirectsType from './global/redirectsType'
import blockContentType from './objects/blockContentType'
import blogCategory from './objects/blogCategory'
import dropDownItemType from './objects/dropDownItemType'
import dropDownType from './objects/dropDownType'
import faqItem from './objects/faqItem'
import faqItemTwo from './objects/faqItemTwo'
import featureCaseStudyCard from './objects/featureCaseStudyCard'
import featureCaseStudyCardItem from './objects/featureCaseStudyCardItem'
import featureItemType from './objects/featureItemType'
import footerLinksType from './objects/footerLinksType'
import servicesListItemType from './objects/servicesListItemType'
import technologyLinks from './objects/technologyLinks'
import workType from './objects/workType'
import {homePageType, notFoundPageType, pageType} from './page'
import {blogPageType} from './page/blogPageType'
import blogFeature from './sections/blogFeature'
import blogList from './sections/blogList'
import blogListPreview from './sections/blogListPreview'
import contact from './sections/contact'
import contactTwo from './sections/contactTwo'
import faq from './sections/faq'
import faqTwo from './sections/faqTwo'
import feature from './sections/feature'
import featureCaseStudy from './sections/featureCaseStudy'
import featureThree from './sections/featureThree'
import featureTwo from './sections/featureTwo'
import hero from './sections/hero'
import heroThree from './sections/heroThree'
import heroTwo from './sections/heroTwo'
import notFound from './sections/notFound'
import {blockContentSectionType} from './sections/policy'
import servicesList from './sections/servicesList'
import technologiesList from './sections/technologiesList'
import technologiesListTwo from './sections/technologiesListTwo'
import workFeature from './sections/workFeature'
import workList from './sections/workList'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    hero,
    heroTwo,
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
    featureTwo,
    featureItemType,
    blockContentType,
    blogPageType,
    blogCategory,
    blogListPreview,
    contact,
    blogFeature,
    blogList,
    workFeature,
    contactTwo,
    faq,
    faqItem,
    technologyLinks,
    technologiesList,
    faqTwo,
    faqItemTwo,
    heroThree,
    featureCaseStudy,
    featureCaseStudyCard,
    featureCaseStudyCardItem,
    featureThree,
    technologiesListTwo,
    blockContentSectionType,
  ],
}
