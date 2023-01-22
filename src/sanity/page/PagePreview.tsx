import {Box, Text} from '@sanity/ui'
import {Suspense} from 'react'
import {isRecord, isString, useClient} from 'sanity'
import styled from 'styled-components'
import {suspend} from 'suspend-react'

import {apiVersion, previewSecretId} from '../env'
import {getSecret} from '../secret'

const FETCH_SECRET = Symbol('preview.secret')

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`

export function PagePreview(props: any) {
  const {
    document: {displayed},
    documentId,
    schemaType,
  } = props

  const id = documentId
  const type = schemaType.name
  const lang = displayed.language === 'sv' ? 'sv' : 'en'
  let slug =
    isRecord(displayed.slug) && isString(displayed.slug.current) && lang === 'sv'
      ? `sv/${displayed.slug.current}`
      : `${displayed!.slug?.current}`

  if (lang === 'en' && displayed?._type === 'home') {
    slug = '/'
  } else if (lang === 'sv' && displayed?._type === 'home') {
    slug = '/sv'
  } else if (lang === 'en' && displayed?._type === 'blog') {
    slug === `blog/${slug}`
  } else if (lang === 'sv' && displayed?._type === 'blog') {
    slug === `sv/blogg/${slug}`
  } else if (lang === 'en') {
    slug === `${slug}`
  } else if (lang === 'sv') {
    slug === `sv/${slug}`
  }

  if (!slug) {
    return (
      <Box>
        <Text>Missing slug</Text>
      </Box>
    )
  }

  if (lang === 'sv' && displayed?._type === 'blog') {
    return (
      <Suspense fallback={null}>
        <PagePreviewWithSecret
          id={id}
          slug={`${displayed.slug.current}`}
          type={type}
          language={lang}
        />
      </Suspense>
    )
  }
  return (
    <Suspense fallback={null}>
      <PagePreviewWithSecret id={id} slug={`${slug}`} type={type} language={lang} />
    </Suspense>
  )
}

function PagePreviewWithSecret(props: {id: string; slug: string; type: string; language: string}) {
  const {id, slug, type, language} = props

  const client = useClient({apiVersion})

  // Use `suspend` to fetch the secret with a TTL of 1 minute, just to check if it's necessary to
  // recreate the secret which has a TTL of 60 minutes.
  const secret = suspend(
    () => getSecret({client, id: previewSecretId, createIfNotExists: true}),
    ['getSecret', previewSecretId, FETCH_SECRET],
    {lifespan: 60000}
  )

  if (!secret) {
    return <div>No secret</div>
  }

  return (
    <StyledIframe
      src={`/api/sanity/preview?type=${type}&id=${id}&slug=${slug}&language=${language}&secret=${secret}`}
    />
  )
}
