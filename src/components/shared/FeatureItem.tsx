import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'

import {IFeatureItem} from '../../page/types'

const FeatureItem = ({data}: {data: IFeatureItem}) => {
  return (
    <div className="flex pt-6">
      <div className="pr-4">
        <AiFillCheckCircle className="text-2xl text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-dark">{data.subTitle && data.subTitle}</h3>
        <p className="text-gray">{data.title && data.title}</p>
      </div>
    </div>
  )
}

export default FeatureItem
