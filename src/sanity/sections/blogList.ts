import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'blogList',
  title: 'Blog list',

  fields: [
    defineField({
      name: 'blogList',
      title: 'All blogs',
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
