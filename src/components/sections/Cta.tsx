import {useAnimation} from 'framer-motion'
import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {ICta} from '../../page/types'

const Cta = ({description, title}: ICta) => {
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
    <motion.section
      animate={controls}
      ref={ref}
      layout="position"
      className="mx-auto flex items-center px-8 py-12 xl:container"
    >
      <div className="mx-auto rounded-lg bg-primary p-6 shadow">
        <h2 className="text-2xl font-bold tracking-wider text-white sm:text-4xl">
          {title && title}
        </h2>
        <p className="pt-3 text-lg text-white">{description && description}</p>
      </div>
    </motion.section>
  )
}

export default Cta
