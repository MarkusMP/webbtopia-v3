import Link from 'next/link'
import React from 'react'

import {IWorkList} from '../../page/types'
import WorkItem from '../shared/WorkItem'

const WorkList = ({descriptionTwo, btnText, description, link, title, workItemList}: IWorkList) => {
  return (
    <section className="mx-auto flex items-center px-8 py-12 xl:container">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full pb-8 lg:w-2/4 lg:pr-4">
          <h2 className="blinker text-4xl tracking-wider">{title && title}</h2>
          <p className="pt-6">{description && description}</p>
          <p className="pt-6 pb-6">{descriptionTwo && descriptionTwo}</p>

          <Link
            className="blinker block max-w-fit rounded-full border-2 border-primary px-12 py-4 text-center tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            href={link?.slug ? `${link.slug}` : '/'}
          >
            {btnText && btnText}
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:pl-4">
          {workItemList && workItemList.map((item: any) => <WorkItem key={item._id} data={item} />)}
        </div>
      </div>
    </section>
  )
}

export default WorkList
