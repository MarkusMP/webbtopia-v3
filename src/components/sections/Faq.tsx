import {motion, useAnimation} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IFaq, IFaqItem} from '../../page/types'
import FaqItem from '../shared/FaqItem'

const Faq = ({faqList, title, description}: IFaq) => {
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
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container">
      <motion.div animate={controls} layout="position" ref={ref}>
        <h2 className="mx-auto max-w-xl text-center text-2xl font-semibold tracking-wider sm:text-4xl">
          {title && title}
        </h2>
        {description && <p className="max-w-3xl pt-3 text-center text-gray">{description}</p>}
      </motion.div>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-6 md:grid-cols-2">
        {faqList &&
          faqList.map((item: IFaqItem) => (
            <FaqItem key={item._key} title={item.title} description={item.description} />
          ))}
      </div>
    </section>
  )
}

export default Faq
