import {defineField, defineType} from 'sanity'

export const blockContentSectionType = defineType({
  type: 'document',
  name: 'blockContentSectionType',
  title: 'Block Content Section Type',

  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
