import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'workFeature',
  title: 'Client cases',

  fields: [
    defineField({
      name: 'workCase',
      title: 'Featured work case',
      type: 'reference',
      to: [
        {
          type: 'work',
        },
      ],
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'workList',
      title: 'All client cases',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'work',
            },
          ],
        },
      ],
    }),
  ],
})
