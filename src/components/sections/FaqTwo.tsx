import {motion, useAnimation} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IFaqTwo} from '../../page/types'
import FaqTwoItem from '../shared/FaqTwoItem'

const FaqTwo = ({faqListTwo, title}: IFaqTwo) => {
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
  return (
    <motion.div
      animate={controls}
      ref={ref}
      layout="position"
      className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container"
    >
      <h2 className="mx-auto max-w-xl text-center text-2xl font-semibold tracking-wider sm:text-4xl">
        {title && title}
      </h2>
      <div className="w-full max-w-2xl pt-6">
        {faqListTwo &&
          faqListTwo.map((item) => (
            <FaqTwoItem
              key={item._key}
              data={{title: item.title, _key: item._key, description: item.description}}
            />
          ))}
      </div>
    </motion.div>
  )
}

export default FaqTwo
