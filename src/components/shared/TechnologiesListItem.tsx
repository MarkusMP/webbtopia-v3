import Image from 'next/image'
import React, {useEffect, useState} from 'react'

import {ITechnologiesListItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const TechnologiesListItem = ({
  data,
  changeName,
  name,
}: {
  data: ITechnologiesListItem
  changeName: (name: string) => void
  name: string
}) => {
  const [show, setShow] = useState(false)
  const imageUrl =
    data.image &&
    urlForImage(data.image as any)
      ?.height(300)
      ?.width(300)
      ?.url()

  useEffect(() => {
    if (name === data?.description) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [name, data.description])

  return (
    <div
      className={`group relative box-border flex cursor-pointer flex-col justify-center border-b-2 pb-5 transition-colors ${
        show ? 'border-primary' : 'border-transparent'
      }`}
      onClick={() => changeName(data.description ? data.description : '')}
    >
      <Image src={imageUrl as any} width={200} height={200} alt={data.image?.alt || ''} />
      <h3
        className={`pt-6 text-center text-base xs:text-xl ${show ? 'text-primary' : 'text-dark'}`}
      >
        {data.description && data.description}
      </h3>
      <div
        className={`${
          show ? 'opacity-100' : 'opacity-0'
        } absolute bottom-[0px] left-[0] right-[0] mx-auto h-0 w-0
        border-l-[8px] border-b-[16px]
        border-r-[8px] border-l-transparent
        border-b-primary border-r-transparent`}
      ></div>
    </div>
  )
}

export default TechnologiesListItem
