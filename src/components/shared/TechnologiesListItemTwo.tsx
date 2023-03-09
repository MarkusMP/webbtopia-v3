import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {ITechnologiesListItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const TechnologiesListItemTwo = ({data}: {data: ITechnologiesListItem}) => {
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
    data.image &&
    urlForImage(data.image as any)
      ?.height(300)
      ?.width(300)
      ?.url()

  return (
    <motion.div animate={controls} ref={ref} className="flex flex-col justify-center">
      <Image src={imageUrl as any} width={200} height={200} alt={data.image?.alt || ''} />
      <Link
        href={data.link?.slug ? data.link?.slug : '/'}
        className="pt-6 text-center text-xl text-dark transition-colors hover:text-primary"
      >
        {data.description && data.description}
      </Link>
    </motion.div>
  )
}

export default TechnologiesListItemTwo
