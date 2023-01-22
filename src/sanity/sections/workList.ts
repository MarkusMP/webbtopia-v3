import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'workList',
  title: 'Work List',

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'descriptionTwo',
      type: 'string',
      title: 'Description Two',
    }),
    defineField({
      name: 'workItemList',
      title: 'Work Item List',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'work',
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
