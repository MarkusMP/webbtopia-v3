import {ClipboardImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'category',
  title: 'Category',
  icon: ClipboardImageIcon,

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
})
