import {HomeIcon} from '@sanity/icons'
import {defineField, defineType, isRecord, isString} from 'sanity'

import {apiVersion, previewSecretId} from '../env'
import {getSecret} from '../secret'
import {PagePreview} from './PagePreview'

export const homePageType = defineType({
  type: 'document',
  name: 'home',
  title: 'Home',
  icon: HomeIcon,

  options: {
    views(S) {
      return [S.view.form().title('Content'), S.view.component(PagePreview).title('Preview')]
    },
    async url(ctx) {
      const {_id: id, _type: type, slug} = ctx.document
      const currentSlug = isRecord(slug) && isString(slug.current) ? slug.current : undefined

      if (!currentSlug) return undefined

      const client = ctx.getClient({apiVersion})
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      })

      if (!secret) return undefined

      return `/api/sanity/preview?type=${type}&id=${id}&slug=${currentSlug}&secret=${secret}`
    },
  },
  fieldsets: [
    {
      title: 'SEO',
      name: 'seo',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title for menu & links',
      description:
        'just make sure you add a descriptive name which will make it easy to find this page later when adding link & browsing the CMS. Example (About us).',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {type: 'hero'},
        {type: 'workList'},
        {type: 'servicesList'},
        {type: 'feature'},
        {type: 'blogListPreview'},
        {type: 'contact'},
      ],
    }),
    defineField({
      title: 'Title for SEO',
      description:
        'make it as enticing as possible to convert users in social feeds and google searches. Ideally between 15 and 70 characters.',
      name: 'titleSEO',
      fieldset: 'seo',
      type: 'string',
      validation: (rule) => rule.max(70).warning(`A title shouldn't be more than 70 characters.`),
    }),
    defineField({
      name: 'descriptionSEO',
      type: 'string',
      title: 'Short paragraph for SEO (meta description)',
      description: 'Ideally between 70 and 160 characters',
      fieldset: 'seo',
      validation: (Rule) =>
        Rule.max(160).warning(`A description shouldn't be more than 160 characters.`),
    }),
    defineField({
      title: 'Og image',
      description: 'Upload image here.',
      name: 'ogImage',
      type: 'image',
    }),
  ],
})
