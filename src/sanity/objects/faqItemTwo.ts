import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'faqItemTwo',
  title: 'Faq Item Two',

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
  ],
})
