import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IAllWorkList} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const WorkListItem = ({data}: {data: IAllWorkList}) => {
  const router = useRouter()
  const imageUrl = data.image && urlForImage(data.image as any)?.url()
  return (
    <div className="flex flex-col flex-wrap rounded-lg bg-white shadow">
      <div>
        <Link
          href={
            data.link?.slug && router.locale === 'en' ? `${data.link?.slug}` : `${data.link?.slug}`
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
      </div>
      <div className="flex h-full flex-1 flex-col p-6">
        <h3 className="pb-4 text-2xl font-bold text-dark">{data.title && data.title}</h3>
        <p className="text-gray">{data.description && data.description}</p>
        <div className="h-full pt-2 xs:pt-6 md:pt-8"></div>
        <Link
          className="block max-w-fit pr-12 text-5xl text-primary hover:text-primary_accent"
          aria-label={
            router.locale === 'en'
              ? `Read more about ${data.title && data.title} case study.`
              : `Läs mer om ${data.title && data.title} kundcase.`
          }
          href={
            data.link?.slug && router.locale === 'en' ? `${data.link?.slug}` : `${data.link?.slug}`
          }
        >
          <CgArrowLongRight />
        </Link>
      </div>
    </div>
  )
}

export default WorkListItem
