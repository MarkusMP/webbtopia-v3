import {motion, useAnimation} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {ITechnologiesList} from '../../page/types'
import TechnologiesListItemTwo from '../shared/TechnologiesListItemTwo'

const TechnologiesList = ({techList, title}: ITechnologiesList) => {
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
    <section
      ref={ref}
      className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container"
    >
      <motion.h2
        animate={controls}
        ref={ref}
        className="mx-auto max-w-md text-center text-2xl font-semibold tracking-wider sm:text-4xl"
      >
        {title && title}
      </motion.h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-4">
        {techList && techList.map((item) => <TechnologiesListItemTwo key={item._id} data={item} />)}
      </div>
    </section>
  )
}

export default TechnologiesList
