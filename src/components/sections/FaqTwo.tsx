import React from 'react'

import {IFaqTwo} from '../../page/types'
import FaqTwoItem from '../shared/FaqTwoItem'

const FaqTwo = ({faqListTwo, title}: IFaqTwo) => {
  return (
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container">
      <h2 className="mx-auto max-w-xl text-center text-2xl font-semibold tracking-wider sm:text-4xl">
        {title && title}
      </h2>
      <div className="w-full max-w-2xl pt-6">
        {faqListTwo &&
          faqListTwo.map((item) => (
            <FaqTwoItem
              key={item._key}
              data={{title: item.title, _key: item._key, description: item.description}}
            />
          ))}
      </div>
    </section>
  )
}

export default FaqTwo
