import {WarningOutlineIcon} from '@sanity/icons'
import {defineField, defineType, isRecord, isString} from 'sanity'

import {apiVersion, previewSecretId} from '../env'
import {getSecret} from '../secret'
import {PagePreview} from './PagePreview'

export const notFoundPageType = defineType({
  type: 'document',
  name: 'notFound',
  title: '404',
  icon: WarningOutlineIcon,

  options: {
    views(S) {
      return [S.view.form().title('Content'), S.view.component(PagePreview).title('Preview')]
    },
    async url(ctx) {
      const {_id: id, _type: type, slug} = ctx.document
      const currentSlug = isRecord(slug) && isString(slug.current) ? slug.current : '/404'

      if (!currentSlug) return undefined

      const client = ctx.getClient({apiVersion})
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      })

      console.log({secret})
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
      title: 'Title for internal reference',
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
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
      of: [{type: 'notFoundSection'}],
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
