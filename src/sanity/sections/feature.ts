import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'feature',
  title: 'Feature',

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
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
      name: 'featureItemList',
      title: 'Feature Item List',
      type: 'array',
      of: [
        {
          type: 'feateureItem',
        },
      ],
    }),
    defineField({
      name: 'btnText',
      type: 'string',
      title: 'Button text',
    }),
    defineField({
      name: 'link',
      title: 'Button Link to',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    }),
  ],
})
