import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'servicesList',
  title: 'Services List',

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
      name: 'servicesItemList',
      title: 'Services Item List',
      type: 'array',
      of: [
        {
          type: 'servicesListItem',
        },
      ],
    }),
  ],
})
