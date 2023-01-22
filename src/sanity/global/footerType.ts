import {UploadIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  icon: UploadIcon,

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
      type: 'string',
      name: 'emailText',
      title: 'Email',
    }),
    defineField({
      name: 'menuItems',
      title: 'Footer links lists',
      description: 'Links displayed on the footer of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'footerLinks',
            },
          ],
        },
      ],
    }),
    defineField({
      type: 'string',
      name: 'socialTitle',
      title: 'Social links title.',
    }),
    defineField({
      name: 'social',
      type: 'array',
      title: 'Social Links',
      description: 'Enter your Social Media URLs',
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'media',
              title: 'Choose Social Media',
              options: {
                list: [
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Linkedin', value: 'linkedin'},
                  {title: 'Youtube', value: 'youtube'},
                ],
              },
            },
            {
              type: 'url',
              name: 'url',
              title: 'Full Profile URL',
            },
          ],
          preview: {
            select: {
              title: 'media',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
})
