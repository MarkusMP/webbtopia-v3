import {motion, useAnimation} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

interface IProps {
  title?: string
  description?: string
}

const FaqItem = ({title, description}: IProps) => {
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
    <motion.div animate={controls} ref={ref} className="rounded-lg bg-white p-6 shadow">
      <h3 className="overflow-wrap break-words pb-3 text-lg font-bold text-dark">
        {title && title}
      </h3>
      <p className="overflow-wrap mt-auto break-words text-gray">{description && description}</p>
    </motion.div>
  )
}

export default FaqItem
