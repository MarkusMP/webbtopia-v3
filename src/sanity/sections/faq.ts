import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'faq',
  title: 'Faq',

  fields: [
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
      name: 'faqList',
      title: 'faq List',
      type: 'array',
      of: [
        {
          type: 'faqItem',
        },
      ],
    }),
  ],
})
