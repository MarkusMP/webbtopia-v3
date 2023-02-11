import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'blogFeature',
  title: 'Blog feature list',

  fields: [
    defineField({
      name: 'blogPost',
      title: 'Featured blog post',
      type: 'reference',
      to: [
        {
          type: 'blog',
        },
      ],
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'blogListFeature',
      title: 'Blog List Feature',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'blog',
            },
          ],
        },
      ],
    }),
  ],
})
