import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'technologiesListTwo',
  title: 'Technologies List Two',

  fields: [
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
      name: 'techListTwo',
      title: 'Tech List',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'technologyLinks',
            },
          ],
        },
      ],
    }),
  ],
})
