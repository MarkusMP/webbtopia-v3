import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'dropDownItem',
  title: 'Drop down item',

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Icon',
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
      name: 'dropDownMenuItems',
      title: 'Dropwdown Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
  ],
})
