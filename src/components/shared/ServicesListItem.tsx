import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IServicesListItem} from '../../page/types'

const ServicesListItem = ({data}: {data: IServicesListItem}) => {
  const router = useRouter()

  return (
    <div className="rounded-t-lg border-b-4 border-primary bg-white p-6 shadow">
      <h3 className="inline-block w-full break-words text-lg font-semibold text-dark">
        {data.title && data.title}
      </h3>
      <Link
        className="mt-12 block max-w-fit pr-12 text-5xl text-primary hover:text-primary_accent"
        href={data.link?.slug ? `/${data.link.slug}` : '/'}
        aria-label={
          router.locale === 'en'
            ? `Read more about ${data.title && data.title.toLocaleLowerCase()} service.`
            : `Läs mer om ${data.title && data.title.toLocaleLowerCase()} tjänst.`
        }
      >
        <CgArrowLongRight />
      </Link>
    </div>
  )
}

export default ServicesListItem
