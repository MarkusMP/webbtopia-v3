import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'technologiesList',
  title: 'Technologies List',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'techList',
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
