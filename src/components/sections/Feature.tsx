import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IFeature} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'
import FeatureItem from '../shared/FeatureItem'

const Feature = ({btnText, image, link, title, featureItemList, description}: IFeature) => {
  const controls = useAnimation()
  const {ref, inView} = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)
  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      })
      setHasAnimated(true)
    }
    if (!inView && !hasAnimated) {
      controls.start({y: 30, opacity: 0})
    }
  }, [controls, inView, hasAnimated])

  const imageUrl =
    image &&
    urlForImage(image as any)
      ?.width(720)
      ?.url()
  return (
    <motion.section
      animate={controls}
      ref={ref}
      layout="position"
      className="mx-auto flex flex-col px-8 py-12 lg:flex-row xl:container"
    >
      <div className="relative order-2 w-full pt-6 lg:order-1 lg:w-1/2 lg:pr-4 lg:pt-0">
        <h2 className="text-2xl font-semibold tracking-wider text-dark text-dark sm:text-4xl">
          {title && title}
        </h2>
        {description && <p className="pt-3 text-gray">{description}</p>}
        <div className="pb-6">
          {featureItemList &&
            featureItemList.map((item) => <FeatureItem key={item._key} data={item} />)}
        </div>

        {btnText && (
          <Link
            className="blinker block max-w-fit rounded-full bg-primary px-14 py-3 text-center tracking-wider text-white transition-colors hover:bg-primary_accent"
            href={link?.slug ? `${link.slug}` : '/'}
          >
            {btnText}
          </Link>
        )}
      </div>
      <div className="order-1 w-full lg:order-2 lg:order-2 lg:w-1/2 lg:pl-4">
        <Image src={imageUrl as any} width={1000} height={1000} alt={image?.alt || ''} />
      </div>
    </motion.section>
  )
}

export default Feature
