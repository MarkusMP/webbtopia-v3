import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {HeroPayload} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const Hero = ({btnText, descriptionTwo, description, image, link, title}: HeroPayload) => {
  const imageUrl = image && urlForImage(image as any)?.url()
  return (
    <section className="mx-auto flex min-h-screen items-center px-8 pt-24 pb-8 xl:container">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="order-2 h-full pt-8 lg:order-1 lg:w-2/3 lg:w-1/2 lg:pr-4">
          <h1 className="blinker pb-6 text-3xl font-bold tracking-wide text-dark sm:text-5xl">
            {title && title}
          </h1>
          <p className="pb-6 text-gray md:text-lg">{description && description}</p>

          {descriptionTwo && <p className="pb-6 text-gray md:text-lg">{descriptionTwo}</p>}

          {btnText && (
            <Link
              className="blinker block max-w-fit rounded-full bg-primary px-14 py-3 tracking-wider text-white transition-colors hover:bg-primary_accent"
              href={link?.slug ? `${link.slug}` : '/'}
            >
              {btnText && btnText}
            </Link>
          )}
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-2/3 lg:w-1/2 lg:pl-4">
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

export default Hero
