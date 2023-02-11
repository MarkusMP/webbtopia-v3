import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

import {
  HeaderDropDownMenuItemsPayload,
  HeaderLinkItemPayload,
  HeaderMenuItemPayload,
} from '../page/types'
import {urlForImage} from '../sanity/lib/sanity.image'

const DropDown = ({
  item,
  handleOnMouseEnter,
  handleOnMouseLeave,
}: {
  item: HeaderMenuItemPayload
  handleOnMouseEnter: () => void
  handleOnMouseLeave: () => void
}) => {
  return (
    <li
      key={item._id}
      className="group inline-block pb-2 lg:px-2 lg:pb-0"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <button className="blinker  flex items-center text-secondary transition-colors hover:text-primary">
        {item.title}
        <BsChevronDown className="ml-2 text-primary" />
      </button>
      <div className="hidden group-hover:flex lg:absolute lg:left-[100px] lg:pt-7 xl:left-[200px]">
        <ul className="container rounded-b-md bg-white text-left text-dark lg:mx-8 lg:mr-2 lg:flex lg:max-w-fit lg:py-6 lg:pl-6 lg:pr-5">
          {item.linkItems &&
            item.linkItems.map((item: HeaderLinkItemPayload) => (
              <div key={item._key} className="bg-white lg:min-w-[200px] lg:max-w-[200px]">
                <div className="blinker lg:flex lg:items-center">
                  {item.image && (
                    <div className="hidden rounded-md bg-primary p-2 lg:mr-2 lg:block">
                      <Image
                        // @ts-ignore: Unreachable code error
                        src={urlForImage(item.image as any).url()}
                        width={40}
                        height={40}
                        alt={item.image?.alt || ''}
                      />
                    </div>
                  )}
                  <p className="text-md hidden font-semibold tracking-wide lg:block">
                    {item.title && item.title}
                  </p>
                </div>
                <div className="lg:pt-4">
                  {item.dropDownMenuItems?.map((item: HeaderDropDownMenuItemsPayload) => (
                    <li key={item._id} className="py-2">
                      <Link
                        href={`/${item.slug}`}
                        className="text-gray transition-colors hover:text-primary"
                      >
                        {item.title && item.title}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
        </ul>
      </div>
    </li>
  )
}

export default DropDown
