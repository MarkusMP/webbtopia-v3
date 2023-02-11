import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import Layout from '../components/global/Layout'
import {SiteMeta} from '../components/global/SiteMeta'
import {urlForImage} from '../sanity/lib/sanity.image'
import {FooterPayload, HeaderPayload, PageBlogData} from './types'

export function BlogPageScreen(props: {
  data: PageBlogData | null
  header: HeaderPayload
  footer: FooterPayload
  canonical: string
}) {
  const {data, header, footer, canonical} = props
  const router = useRouter()

  const myPortableTextComponents = {
    marks: {
      link: ({children, value}: any) => {
        return (
          <a href={value.href} rel={'noreferrer noopener'} target="_blank" className="text-dark">
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({value}: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const imageProps = urlForImage(data?.image as any)?.url()
        return (
          <Image
            className="object-cover"
            // @ts-ignore: Object is possibly 'null'.
            src={imageProps}
            // @ts-ignore: Object is possibly 'null'.
            alt={value.alt}
            width={700}
            height={700}
          />
        )
      },
    },
  }

  const imageProps = urlForImage(data?.image as any)
    ?.width(830)
    ?.url()

  const ogImage = data?.ogImage && urlForImage(data.ogImage as any)?.url()

  return (
    <>
      <SiteMeta
        noIndex={!data?.indexPage ? false : data.indexPage === true ? true : false}
        title={data?.titleSEO}
        description={data?.descriptionSEO}
        canonical={canonical}
        ogImage={ogImage}
      />
      <Layout header={header} footer={footer}>
        <section className="pt-[80px]">
          <div className="container mx-auto max-w-2xl py-12 px-6">
            <Link href={router.locale === 'en' ? '/blog' : '/sv/blogg'}>
              <button className="mb-6 rounded-full bg-primary px-4 py-2 text-white hover:bg-primary_accent">
                {router.locale === 'en' ? 'Go back' : 'Gå Tillbaka'}
              </button>
            </Link>

            {imageProps && (
              <Image
                className="image rounded-lg"
                src={imageProps}
                alt={data?.image?.alt ? data?.image?.alt : ''}
                width={830}
                height={830}
                priority
              />
            )}
            <h1 className="pt-6 text-3xl font-bold text-dark">{data?.title && data.title}</h1>

            <div className="prose pt-4 text-dark">
              {data?.body && (
                <PortableText value={data?.body} components={myPortableTextComponents} />
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
