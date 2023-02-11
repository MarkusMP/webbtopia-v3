import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'featureTwo',
  title: 'Feature Two',

  fields: [
    defineField({
      type: 'string',
      name: 'subTitle',
      title: 'Sub Title',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
    }),
    defineField({
      type: 'string',
      name: 'descriptionTwo',
      title: 'Description Two',
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
      type: 'string',
      name: 'titleTwo',
      title: 'Title for list',
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
  ],
})
