import React from 'react'

import {IFaq, IFaqItem} from '../../page/types'

const Faq = ({faqList, title, description}: IFaq) => {
  return (
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 xl:container">
      <h2 className="mx-auto max-w-xl text-center text-2xl font-semibold tracking-wider sm:text-4xl">
        {title && title}
      </h2>
      {description && <p className="max-w-3xl pt-3 text-center text-gray">{description}</p>}
      <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-6 md:grid-cols-2">
        {faqList &&
          faqList.map((item: IFaqItem) => (
            <div key={item._key} className="rounded-lg bg-white p-6 shadow">
              <h3 className="overflow-wrap break-words pb-3 text-lg font-bold text-dark">
                {item.title && item.title}
              </h3>
              <p className="overflow-wrap mt-auto break-words text-gray">
                {item.description && item.description}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Faq
