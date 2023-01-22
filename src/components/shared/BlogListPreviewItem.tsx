import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IBlogListPreviewItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const BlogListPreviewItem = ({data}: {data: IBlogListPreviewItem}) => {
  const router = useRouter()
  const imageUrl = data.image && urlForImage(data.image as any)?.url()
  return (
    <div className="relative col-span-1 h-full rounded-lg bg-white shadow">
      <div>
        <Image
          src={imageUrl as any}
          width={1000}
          height={1000}
          alt={data.image?.alt || ''}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="pb-4 text-2xl font-bold">{data.title && data.title}</h3>
        <p className="pb-16">{data.description && data.description}</p>
        <Link
          className="absolute bottom-0 mt-4 mb-6 block max-w-fit pr-12 text-5xl text-primary hover:text-primary_accent"
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

export default BlogListPreviewItem
