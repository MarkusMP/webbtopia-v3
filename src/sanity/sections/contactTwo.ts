import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'contactTwo',
  title: 'Contact Two',

  fields: [
    defineField({
      type: 'string',
      name: 'subTitle',
      title: 'Sub Title',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'descriptionTwoTitle',
      type: 'string',
      title: 'Description Two Title',
    }),
    defineField({
      name: 'descriptionTwo',
      type: 'string',
      title: 'Description Two',
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
      name: 'info',
      type: 'string',
      title: 'Info',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'btnText',
      type: 'string',
      title: 'Form Button text',
    }),
    defineField({
      name: 'formText',
      type: 'string',
      title: 'Form info text',
    }),
  ],
})
