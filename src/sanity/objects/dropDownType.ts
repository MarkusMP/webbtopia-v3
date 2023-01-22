import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'dropDown',
  title: 'Drop down',

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'displayed on the header of your site.',
    }),
    defineField({
      name: 'linkItems',
      title: 'Item list',
      type: 'array',
      of: [
        {
          type: 'dropDownItem',
        },
      ],
    }),
  ],
})
