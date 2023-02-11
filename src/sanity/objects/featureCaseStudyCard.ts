import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'featureCaseStudyCard',
  title: 'Feature Case Study Card',

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'linkItems',
      title: 'Item list',
      type: 'array',
      of: [
        {
          type: 'featureCaseStudyCardItem',
        },
      ],
    }),
  ],
})
