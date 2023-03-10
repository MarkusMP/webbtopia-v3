import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IFeatureTwo} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'
import FeatureItem from '../shared/FeatureItem'

const FeatureTwo = ({
  description,
  descriptionTwo,
  featureItemList,
  image,
  title,
  titleTwo,
  subTitle,
}: IFeatureTwo) => {
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
      ?.height(800)
      ?.url()

  return (
    <motion.section
      animate={controls}
      ref={ref}
      layout="position"
      className="mx-auto flex flex-col px-8 py-12 lg:flex-row xl:container"
    >
      <div className="w-full  lg:w-1/2 lg:pr-4">
        <Image priority src={imageUrl as any} width={1000} height={1000} alt={image?.alt || ''} />
      </div>
      <div className="relative w-full pt-6 lg:w-1/2 lg:pl-4 lg:pt-0">
        {subTitle && <h3 className="pb-3 tracking-widest text-primary">{subTitle}</h3>}

        <h2 className="text-2xl font-semibold tracking-wider text-dark sm:text-4xl">
          {title && title}
        </h2>
        {description && <p className="pt-3 text-gray">{description}</p>}
        {descriptionTwo && <p className="pt-3 text-gray">{descriptionTwo}</p>}
        {titleTwo && (
          <h4 className="pt-6 text-2xl font-semibold tracking-wider text-dark sm:text-3xl">
            {titleTwo}
          </h4>
        )}
        <div className="pb-6">
          {featureItemList &&
            featureItemList.map((item) => <FeatureItem key={item._key} data={item} />)}
        </div>
      </div>
    </motion.section>
  )
}

export default FeatureTwo
