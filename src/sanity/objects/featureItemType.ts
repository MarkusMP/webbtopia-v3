import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'feateureItem',
  title: 'Feature Item',

  fields: [
    defineField({
      type: 'string',
      name: 'subTitle',
      title: 'Title',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Description',
    }),
  ],
})
