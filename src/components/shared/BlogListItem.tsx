import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IBlogListItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const BlogListItem = ({data}: {data: IBlogListItem}) => {
  const router = useRouter()
  const imageUrl =
    data.image &&
    urlForImage(data.image as any)
      ?.width(800)
      ?.url()
  return (
    <div className="flex flex-col flex-wrap rounded-lg bg-white shadow">
      <div className="relative flex-1">
        <Link
          href={
            data.slug && router.locale === 'en' ? `/blog/${data.slug}` : `/sv/blogg/${data.slug}`
          }
        >
          <Image
            src={imageUrl as any}
            width={1000}
            height={1000}
            alt={data.image?.alt || ''}
            className="cursor-pointer rounded-t-lg"
          />
        </Link>
        <h4 className="absolute top-4 right-4 rounded-lg bg-dark px-4 py-1 text-sm text-white">
          {data.categories?.title && data.categories.title}
        </h4>
      </div>
      <div className="flex h-full flex-1 flex-col p-6">
        <h3 className="pb-4 text-2xl font-bold text-dark">{data.title && data.title}</h3>
        <div className="pt-2 xs:pt-6 md:pt-8"></div>
        <Link
          className="block max-w-fit pr-12 text-5xl text-primary hover:text-primary_accent"
          aria-label={
            router.locale === 'en'
              ? `Read more about ${data.title && data.title} blog post.`
              : `Läs mer om ${data.title && data.title} blogg artikel.`
          }
          href={
            data.slug && router.locale === 'en' ? `/blog/${data.slug}` : `/sv/blogg/${data.slug}`
          }
        >
          <CgArrowLongRight />
        </Link>
      </div>
    </div>
  )
}

export default BlogListItem
