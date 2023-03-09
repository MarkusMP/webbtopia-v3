import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IFeatureThree} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const FeatureThree = ({image, title, description}: IFeatureThree) => {
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
      className="mx-auto flex flex-col items-center justify-between px-8 py-12 lg:flex-row xl:container"
    >
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
    </motion.section>
  )
}

export default FeatureThree
