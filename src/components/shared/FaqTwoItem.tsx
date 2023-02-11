import React, {useState} from 'react'
import {BsChevronDown, BsQuestionCircle} from 'react-icons/bs'

import {IFaqItemTwo} from '../../page/types'

const FaqTwoItem = ({data}: {data: IFaqItemTwo}) => {
  const [show, setShow] = useState(false)
  return (
    <div className="mb-6 w-full">
      <div className={`w-full border-b-2 border-gray pb-6`}>
        <div
          onClick={() => setShow((prevShow) => !prevShow)}
          className="flex cursor-pointer items-center justify-between"
        >
          <div className="flex items-center">
            <BsQuestionCircle className="text-5xl text-primary" />
            <h3 className="mx-3 break-all text-base text-dark xs:text-lg sm:break-normal sm:text-xl">
              {data.title && data.title}
            </h3>
          </div>
          <div>
            <BsChevronDown className="text-3xl" />
          </div>
        </div>
        <div className={`${show ? 'block' : 'hidden'} pt-6`}>
          <p className="text-gray">{data.description && data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqTwoItem
