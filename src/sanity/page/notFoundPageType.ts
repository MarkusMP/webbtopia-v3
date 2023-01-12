import {WarningOutlineIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType, isRecord, isString} from 'sanity'

import {apiVersion, previewSecretId} from '../env'
import {getSecret} from '../secret'
import {PagePreview} from './PagePreview'

export const notFoundPageType = defineType({
  type: 'document',
  name: 'notFound',
  title: '404',
  icon: WarningOutlineIcon,

  options: {
    views(S) {
      return [S.view.form().title('Content'), S.view.component(PagePreview).title('Preview')]
    },
    async url(ctx) {
      const {_id: id, _type: type, slug} = ctx.document
      const currentSlug = isRecord(slug) && isString(slug.current) ? slug.current : '/404'

      if (!currentSlug) return undefined

      const client = ctx.getClient({apiVersion})
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      })

      console.log({secret})
      if (!secret) return undefined

      return `/api/sanity/preview?type=${type}&id=${id}&slug=${currentSlug}&secret=${secret}`
    },
  },

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [defineArrayMember({type: 'pageElement'})],
    }),
  ],
})
