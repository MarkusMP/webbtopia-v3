import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {HeroTwoPayload} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const HeroTwo = ({btnText, description, image, link, title}: HeroTwoPayload) => {
  const imageUrl =
    image &&
    urlForImage(image as any)
      ?.height(610)
      .width(610)
      ?.url()
  return (
    <section className="mx-auto flex min-h-screen items-center px-8 pt-24 pb-8 xl:container">
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        <div className="order-2 h-full pt-8 lg:order-1 lg:w-2/3 lg:w-1/2 lg:pr-4">
          <h1 className="blinker pb-6 text-3xl font-bold tracking-wide text-dark xs:text-5xl md:text-6xl">
            {title && title}
          </h1>
          <p className="pb-6 text-gray md:text-lg">{description && description}</p>

          <Link
            className="blinker block max-w-fit rounded-full border-2 border-primary px-12 py-3 text-center tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            href={link?.slug ? `${link.slug}` : '/'}
          >
            {btnText && btnText}
          </Link>
        </div>
        <div className="order-1 w-full rounded-lg lg:order-2 lg:w-2/3 lg:w-1/2 lg:pl-4">
          <Image
            src={imageUrl as any}
            width={450}
            height={450}
            alt={image?.alt || ''}
            priority
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroTwo
