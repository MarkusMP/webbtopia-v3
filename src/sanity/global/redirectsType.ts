import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'redirects',
  title: 'Redirects',
  icon: LinkIcon,

  fields: [
    defineField({
      title: 'From (slug)',
      name: 'from',
      type: 'string',
    }),
    defineField({
      title: 'To (slug)',
      name: 'to',
      type: 'string',
    }),
    defineField({
      title: 'Is this a permanent redirect (301)?',
      name: 'isPermanent',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
