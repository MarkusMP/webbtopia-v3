import {motion, useAnimation} from 'framer-motion'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {ITechnologiesListItem, ITechnologiesListTwo} from '../../page/types'
import TechnologiesListItem from '../shared/TechnologiesListItem'

const TechnologiesListTwo = ({description, techListTwo, title}: ITechnologiesListTwo) => {
  const [name, setName] = useState('')
  const [data, setData] = useState<ITechnologiesListItem>()
  const controls = useAnimation()
  const {ref, inView} = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!name && techListTwo && techListTwo[0].description) {
      setName(techListTwo[0].description)
    }

    if (name && techListTwo) {
      const tech = techListTwo.find((item) => item.description === name)

      setData(tech)
    }
  }, [name, techListTwo])

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

  const handleChangeName = (name: string) => {
    setName(name)
  }
  return (
    <motion.section
      animate={controls}
      layout="position"
      ref={ref}
      className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container"
    >
      <h2 className="mx-auto max-w-md text-center text-2xl font-semibold tracking-wider sm:text-4xl">
        {title && title}
      </h2>
      <p className="max-w-2xl pt-3 text-center">{description && description}</p>
      <div className="grid auto-rows-fr grid-cols-3 gap-3 pt-6 xs:gap-8 sm:gap-24">
        {techListTwo &&
          techListTwo.map((item) => (
            <TechnologiesListItem
              key={item._id}
              data={item}
              changeName={handleChangeName}
              name={name}
            />
          ))}
      </div>
      <div className="w-full max-w-6xl bg-dark p-6 sm:p-12">
        <h4 className="mx-auto max-w-md text-center text-2xl font-semibold tracking-wider text-white sm:text-4xl">
          {data?.description && data.description}
        </h4>
        <p className="py-12 text-center text-white">{data?.info && data.info}</p>
        {data?.btnText && (
          <Link
            className="blinker mx-auto block max-w-fit rounded-full border-2 border-primary px-12 py-3 text-center tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            href={data.link?.slug ? `${data.link?.slug}` : '/'}
          >
            {data.btnText}
          </Link>
        )}
      </div>
    </motion.section>
  )
}

export default TechnologiesListTwo
