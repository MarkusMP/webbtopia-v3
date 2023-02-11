import {BlockContentIcon} from '@sanity/icons'
import {defineField, defineType, isRecord, isString} from 'sanity'

import {apiVersion, previewSecretId} from '../env'
import {getSecret} from '../secret'
import {PagePreview} from './PagePreview'

export const blogPageType = defineType({
  type: 'document',
  name: 'blog',
  title: 'Blog',
  icon: BlockContentIcon,

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
      title: 'Title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Relative address on the website',
      description: 'Defines the URL of the page in the website. Example (test)',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      title: 'Unlisted',
      description: 'If unlisted is true then it wont show on up google search.',
      name: 'indexPage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      description: 'Upload image here.',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'authorInfo',
      title: 'Author info',
      type: 'string',
    }),
    defineField({
      title: 'Author image',
      description: 'Upload author image here.',
      name: 'authorImage',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
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
