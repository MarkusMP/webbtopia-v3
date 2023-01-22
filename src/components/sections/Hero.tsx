import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {HeroPayload} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const Hero = ({btnText, description, image, link, title}: HeroPayload) => {
  const imageUrl = image && urlForImage(image as any)?.url()
  return (
    <section className="mx-auto flex min-h-screen items-center px-8 pt-24 pb-8 xl:container">
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 h-full pt-8 lg:order-1 lg:w-2/3 lg:w-1/2 lg:pr-4">
          <h1 className="blinker pb-6 text-4xl font-bold tracking-wide xs:text-5xl md:text-6xl">
            {title && title}
          </h1>
          <p className="capitaliz pb-6 md:text-lg">{description && description}</p>

          <Link
            className="blinker block max-w-fit rounded-full bg-primary px-14 py-4 tracking-wider text-white transition-colors hover:bg-primary_accent"
            href={link?.slug ? `${link.slug}` : '/'}
          >
            {btnText && btnText}
          </Link>
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-2/3 lg:w-1/2 lg:pl-4">
          <Image priority src={imageUrl as any} width={1000} height={1000} alt={image?.alt || ''} />
        </div>
      </div>
    </section>
  )
}

export default Hero
