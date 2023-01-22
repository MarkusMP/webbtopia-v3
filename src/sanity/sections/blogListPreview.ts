import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'blogListPreview',
  title: 'Blog List Preview',

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
      name: 'blogListPreview',
      title: 'Blog List Preview',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'blog',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'btnText',
      type: 'string',
      title: 'Button text',
    }),
    defineField({
      name: 'link',
      title: 'Button Link to',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    }),
  ],
})
