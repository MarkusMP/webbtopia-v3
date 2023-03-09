import Image from 'next/image'
import React from 'react'

import {HeroThreePayload} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const HeroThree = ({description, image, title}: HeroThreePayload) => {
  const imageUrl = image && urlForImage(image as any)?.url()

  return (
    <section className="mx-auto flex min-h-screen items-center px-8 pt-24 pb-8 xl:container">
      <div className="flex w-full flex-col items-center lg:flex-row">
        <div className="order-2 h-full pt-8 lg:order-1 lg:w-1/2 lg:pr-4">
          <h1 className="blinker border-b-2 border-dark pb-12 text-4xl font-bold tracking-wide text-dark xs:text-5xl md:text-6xl">
            {title && title}
          </h1>
          <p className="pt-6 text-gray md:text-xl">{description && description}</p>
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-1/2 lg:pl-4">
          {imageUrl && (
            <Image
              priority
              src={imageUrl as any}
              width={1000}
              height={1000}
              alt={image?.alt || ''}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroThree
