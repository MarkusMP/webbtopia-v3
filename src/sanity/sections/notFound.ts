import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'notFoundSection',
  title: '404 Section',

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
  ],
})
