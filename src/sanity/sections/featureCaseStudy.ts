import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'featureCaseStudy',
  title: 'Feature Case Study',

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
      title: 'Image',
      description: 'Upload image here.',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'btnText',
      type: 'string',
      title: 'Button text',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
    defineField({
      name: 'featureCaseStudyCardList',
      title: 'Card List',
      type: 'array',
      of: [
        {
          type: 'featureCaseStudyCard',
        },
      ],
    }),
  ],
})
