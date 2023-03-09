import {motion, useAnimation} from 'framer-motion'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IWorkList} from '../../page/types'
import WorkItem from '../shared/WorkItem'

const WorkList = ({descriptionTwo, btnText, description, link, title, workItemList}: IWorkList) => {
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
    <section ref={ref} className="mx-auto my-12 flex items-center px-8 xl:container">
      <motion.div animate={controls} className="flex flex-col lg:flex-row">
        <div className="w-full pb-8 lg:w-2/4 lg:pr-4 2xl:w-3/4">
          <h2 className="text-2xl font-semibold tracking-wider text-dark sm:text-4xl">
            {title && title}
          </h2>
          <p className="pt-6 text-gray">{description && description}</p>
          <p className="pt-3 pb-6 text-gray">{descriptionTwo && descriptionTwo}</p>

          {btnText && (
            <Link
              className="blinker block max-w-fit rounded-full border-2 border-primary px-12 py-3 text-center tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
              href={link?.slug ? `${link.slug}` : '/'}
            >
              {btnText && btnText}
            </Link>
          )}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:pl-4">
          {workItemList && workItemList.map((item: any) => <WorkItem key={item._id} data={item} />)}
        </div>
      </motion.div>
    </section>
  )
}

export default WorkList
