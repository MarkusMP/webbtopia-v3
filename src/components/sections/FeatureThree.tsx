import Image from 'next/image'
import React from 'react'

import {IFeatureThree} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const FeatureThree = ({image, title, description}: IFeatureThree) => {
  const imageUrl =
    image &&
    urlForImage(image as any)
      ?.width(720)
      ?.url()
  return (
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 lg:flex-row xl:container">
      <div className="lg:w-1/2 lg:pr-4">
        {imageUrl && (
          <Image
            priority
            src={imageUrl as any}
            width={1000}
            height={1000}
            alt={image?.alt || ''}
            className="rounded-lg"
          />
        )}
      </div>
      <div className='lg:pl-4" pt-6 lg:w-1/2 lg:pt-0'>
        <h2 className="text-2xl font-semibold tracking-wider text-dark sm:text-4xl">
          {title && title}
        </h2>
        <p className="pt-6 text-gray">{description && description}</p>
      </div>
    </section>
  )
}

export default FeatureThree
