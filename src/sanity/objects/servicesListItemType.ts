import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'servicesListItem',
  title: 'Services List Item',

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
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
