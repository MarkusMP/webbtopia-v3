import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {IFeature} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'
import FeatureItem from '../shared/FeatureItem'

const Feature = ({btnText, image, link, title, featureItemList}: IFeature) => {
  const imageUrl = image && urlForImage(image as any)?.url()
  return (
    <section className="mx-auto flex flex-col px-8 py-12 lg:flex-row xl:container">
      <div className="relative order-2 w-full pt-6 lg:order-1 lg:w-1/2 lg:pr-4 lg:pt-0">
        <h2 className="blinker text-4xl tracking-wider">{title && title}</h2>
        <div className="pb-6">
          {featureItemList &&
            featureItemList.map((item) => <FeatureItem key={item._key} data={item} />)}
        </div>

        <Link
          className="blinker block max-w-fit rounded-full bg-primary px-14 py-4 text-center tracking-wider text-white transition-colors hover:bg-primary_accent"
          href={link?.slug ? `${link.slug}` : '/'}
        >
          {btnText && btnText}
        </Link>
      </div>
      <div className="order-1 w-full lg:order-2 lg:order-2 lg:w-2/3 lg:w-1/2 lg:pl-4">
        <Image priority src={imageUrl as any} width={1000} height={1000} alt={image?.alt || ''} />
      </div>
    </section>
  )
}

export default Feature
