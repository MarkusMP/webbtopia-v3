import React from 'react'

import {IServicesList} from '../../page/types'
import ServicesListItem from '../shared/ServicesListItem'

const ServicesList = ({title, servicesItemList, description}: IServicesList) => {
  return (
    <section className="mx-auto items-center px-8 py-12 xl:container">
      <div className="w-full pb-6 lg:w-2/3">
        <h2 className="blinker text-4xl tracking-wider">{title && title}</h2>
        <p className="pt-6">{description && description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {servicesItemList &&
          servicesItemList.map((item: any) => <ServicesListItem key={item._key} data={item} />)}
      </div>
    </section>
  )
}

export default ServicesList
