import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'faqTwo',
  title: 'Faq Two',

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'faqListTwo',
      title: 'faq List',
      type: 'array',
      of: [
        {
          type: 'faqItemTwo',
        },
      ],
    }),
  ],
})
