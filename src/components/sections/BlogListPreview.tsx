import {m, useAnimation} from 'framer-motion'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {IBlogListPreview} from '../../page/types'
import BlogListPreviewItem from '../shared/BlogListPreviewItem'

const BlogListPreview = ({
  blogListPreview,
  btnText,
  description,
  link,
  subTitle,
  title,
}: IBlogListPreview) => {
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
    <section ref={ref} className="mx-auto flex items-center px-8 py-12 xl:container">
      <m.div layout="position" animate={controls} ref={ref} className="flex flex-col lg:flex-row">
        <div className="flex w-full flex-col pb-8 lg:w-2/4 lg:pr-4 2xl:w-3/4">
          <h3 className="pb-3 tracking-wider text-primary">{subTitle && subTitle}</h3>
          <h2 className="text-2xl font-semibold tracking-wider text-dark sm:text-4xl">
            {title && title}
          </h2>
          <p className="pt-6 text-gray">{description && description}</p>

          <div className="flex-1 pb-6"></div>

          <Link
            className="blinker block max-w-fit rounded-full bg-primary px-14 py-3 text-center tracking-wider text-white transition-colors hover:bg-primary_accent"
            href={link?.slug ? `${link.slug}` : '/'}
          >
            {btnText && btnText}
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:pl-4">
          {blogListPreview &&
            blogListPreview.map((item: any) => <BlogListPreviewItem key={item._id} data={item} />)}
        </div>
      </m.div>
    </section>
  )
}

export default BlogListPreview
