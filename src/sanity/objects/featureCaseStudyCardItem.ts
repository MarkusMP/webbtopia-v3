import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'featureCaseStudyCardItem',
  title: 'Feature Case Study Card Item',

  fields: [
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
    }),
  ],
})
