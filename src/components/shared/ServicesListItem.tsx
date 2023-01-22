import Link from 'next/link'
import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IServicesListItem} from '../../page/types'

const ServicesListItem = ({data}: {data: IServicesListItem}) => {
  return (
    <div className="rounded-t-lg border-b-4 border-primary bg-white p-6 shadow">
      <h3 className="inline-block w-full break-words text-lg font-semibold">
        {data.title && data.title}
      </h3>
      <Link
        className="mt-12 block max-w-fit pr-12 text-5xl text-primary hover:text-primary_accent"
        href={data.link?.slug ? `/${data.link.slug}` : '/'}
      >
        <CgArrowLongRight />
      </Link>
    </div>
  )
}

export default ServicesListItem
