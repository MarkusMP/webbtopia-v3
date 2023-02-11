import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {ITechnologiesListItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const TechnologiesListItemTwo = ({data}: {data: ITechnologiesListItem}) => {
  const imageUrl =
    data.image &&
    urlForImage(data.image as any)
      ?.height(300)
      ?.width(300)
      ?.url()

  return (
    <div className="flex flex-col justify-center">
      <Image src={imageUrl as any} width={200} height={200} alt={data.image?.alt || ''} />
      <Link
        href={data.link?.slug ? data.link?.slug : '/'}
        className="pt-6 text-center text-xl text-dark transition-colors hover:text-primary"
      >
        {data.description && data.description}
      </Link>
    </div>
  )
}

export default TechnologiesListItemTwo
