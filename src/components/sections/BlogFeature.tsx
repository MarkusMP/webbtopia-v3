import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IBlogFeature, IBlogListFeatureItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const BlogFeature = ({blogListFeature, blogPost, title}: IBlogFeature) => {
  const router = useRouter()

  const image = blogPost?.image && urlForImage(blogPost?.image as any)?.url()
  const imageAuthor =
    blogPost?.authorImage &&
    urlForImage(blogPost?.authorImage as any)
      ?.height(300)
      ?.url()

  const date = new Date(blogPost?.publishedAt)

  return (
    <section className="mx-auto mt-[80px] flex items-center px-8 py-12 xl:container">
      <div className="flex w-full flex-col md:flex-row">
        <div className="box box-1 order-2 w-full md:order-1 md:w-1/2 md:pr-4">
          {image && (
            <Image
              priority
              src={image as any}
              width={800}
              height={800}
              className="rounded-lg"
              alt={blogPost?.image?.alt || ''}
            />
          )}
          <h2 className="texl-2xl pt-6 font-semibold text-dark sm:text-4xl">
            {blogPost?.title && blogPost?.title}
          </h2>
          <p className="pt-3 text-gray">{blogPost?.description && blogPost.description}</p>
          <div className="flex flex-col pt-6 xs:flex-row xs:items-center">
            <div className="relative flex min-h-[60px] min-w-[60px] max-w-[60px] overflow-hidden rounded-full">
              <Image
                src={imageAuthor as any}
                fill
                alt={blogPost?.authorImage?.alt || ''}
                className="object-cover"
              />
            </div>
            <div className="pt-2 xs:pl-3">
              <h4 className="font-bold text-dark">
                {blogPost?.authorInfo && blogPost?.authorInfo}
              </h4>
              <p className="text-gray">{date.toLocaleDateString()}</p>
            </div>
          </div>
          <Link
            className="block flex max-w-fit items-center pt-6 pr-12 text-primary hover:text-primary_accent"
            href={
              blogPost?.slug && router.locale === 'en'
                ? `/blog/${blogPost.slug}`
                : `/sv/blogg/${blogPost?.slug}`
            }
          >
            {router.locale === 'en' ? 'Read more' : 'Läs mer'}
            <span className="pl-2 text-2xl">
              <CgArrowLongRight />
            </span>
          </Link>
        </div>
        <div className="box box-2 order-1 w-full pb-6 md:order-2 md:w-1/2 md:pl-4 md:pb-0">
          <h1 className="blinker text-4xl font-semibold tracking-wider text-dark text-dark sm:text-5xl lg:text-6xl">
            {title && title}
          </h1>
          <div className="grid grid-cols-1 gap-6 pt-6 xs:grid-cols-2">
            {blogListFeature &&
              blogListFeature.map((item: IBlogListFeatureItem) => (
                <div key={item._id} className="flex flex-col">
                  <h3 className="text-lg font-bold text-dark xs:text-xl">
                    {item.title && item.title}
                  </h3>
                  <div className="flex-1"></div>

                  <Link
                    className="flex items-center pt-3 text-primary hover:text-primary_accent"
                    href={
                      item?.slug && router.locale === 'en'
                        ? `/blog/${item.slug}`
                        : `/sv/blogg/${item?.slug}`
                    }
                  >
                    {router.locale === 'en' ? 'Read more' : 'Läs mer'}
                    <span className="pl-2 text-2xl">
                      <CgArrowLongRight />
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogFeature
