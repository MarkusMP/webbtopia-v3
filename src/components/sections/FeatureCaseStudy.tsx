import Image from 'next/image'
import React from 'react'

import {IFeatureCaseStudy} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const FeatureCaseStudy = ({
  btnText,
  description,
  featureCaseStudyCardList,
  image,
  name,
  title,
  url,
}: IFeatureCaseStudy) => {
  const imageUrl =
    image &&
    urlForImage(image as any)
      ?.height(300)
      ?.url()
  return (
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 lg:flex-row xl:container">
      <div className="flex w-full flex-col justify-between lg:flex-row">
        <div className='lg:pr-4"> lg:w-1/3'>
          <h2 className="text-2xl font-semibold tracking-wider text-dark sm:text-4xl">
            {title && title}
          </h2>
          <div className="flex flex-col py-6 xs:flex-row xs:items-center">
            {image && (
              <div className="relative flex min-h-[75px] min-w-[75px]  max-w-[75px] overflow-hidden rounded-full">
                <Image src={imageUrl as any} fill alt={image?.alt || ''} className="object-cover" />
              </div>
            )}

            <div className="pt-2 xs:pt-0 xs:pl-3">
              <h3 className="font-bold text-dark">{name && name}</h3>
              <a
                className="break-all pt-4 text-primary underline transition-colors hover:text-primary_accent sm:break-normal"
                href={url}
              >
                {btnText && btnText}
              </a>
            </div>
          </div>
          <p className="pb-6 text-gray lg:pb-0">{description && description}</p>
        </div>
        <div className="lg:w-2/3 lg:pl-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featureCaseStudyCardList &&
              featureCaseStudyCardList?.map((item) => (
                <div key={item._key} className="rounded-lg bg-white p-6 shadow">
                  <h4 className="txt-dark text-xl">{item.title && item.title}</h4>
                  <ul className="px-6 pt-6">
                    {item.linkItems &&
                      item.linkItems?.map((item) => (
                        <li key={item._key} className="list-disc pb-3 text-gray">
                          {item.description && item.description}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureCaseStudy
