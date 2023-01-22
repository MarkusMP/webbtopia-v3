import Link from 'next/link'
import React from 'react'

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
  return (
    <section className="mx-auto flex items-center px-8 py-12 xl:container">
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full flex-col pb-8 lg:w-2/4 lg:pr-4">
          <h3 className="blinker pb-3 tracking-widest text-primary">{subTitle && subTitle}</h3>
          <h2 className="blinker text-4xl tracking-wider">{title && title}</h2>
          <p className="pt-6">{description && description}</p>

          <div className="flex-1 pb-6"></div>

          <Link
            className="blinker block max-w-fit rounded-full bg-primary px-14 py-4 text-center tracking-wider text-white transition-colors hover:bg-primary_accent"
            href={link?.slug ? `${link.slug}` : '/'}
          >
            {btnText && btnText}
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:pl-4">
          {blogListPreview &&
            blogListPreview.map((item: any) => <BlogListPreviewItem key={item._id} data={item} />)}
        </div>
      </div>
    </section>
  )
}

export default BlogListPreview