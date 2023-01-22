import {MenuIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'header',
  title: 'Header',
  icon: MenuIcon,

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title for internal reference',
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      title: 'Logo',
      description: 'Upload logo here.',
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
      name: 'menuItems',
      title: 'Menu Item list',
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
            {
              type: 'dropDown',
            },
          ],
        },
      ],
    }),
    defineField({
      type: 'string',
      name: 'btnText',
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
