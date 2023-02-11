import {ArchiveIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'technologyLinks',
  title: 'Technology links',
  icon: ArchiveIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Internal reference',
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Title',
    }),
    defineField({
      type: 'string',
      name: 'info',
      title: 'Description',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
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
      name: 'link',
      title: 'Button Link to',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    }),
    defineField({
      type: 'string',
      name: 'btnText',
      title: 'Button text',
    }),
  ],
})
