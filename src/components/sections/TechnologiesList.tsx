import React from 'react'

import {ITechnologiesList} from '../../page/types'
import TechnologiesListItemTwo from '../shared/TechnologiesListItemTwo'

const TechnologiesList = ({techList, title}: ITechnologiesList) => {
  return (
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container">
      <h2 className="mx-auto max-w-md text-center text-2xl font-semibold tracking-wider sm:text-4xl">
        {title && title}
      </h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-4">
        {techList && techList.map((item) => <TechnologiesListItemTwo key={item._id} data={item} />)}
      </div>
    </section>
  )
}

export default TechnologiesList
