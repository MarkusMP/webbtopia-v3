import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'hero',
  title: 'Hero',

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
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
