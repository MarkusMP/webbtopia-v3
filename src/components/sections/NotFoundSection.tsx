import React from 'react'

import {NotFoundSectionPayload} from '../../page/types'

const NotFound = ({description, title}: NotFoundSectionPayload) => {
  return (
    <div className="container mx-auto flex min-h-screen items-center px-8">
      <div className="mx-auto text-center">
        <h1 className="blinker pb-4 text-6xl font-bold">{title && title}</h1>
        <p>{description && description}</p>
      </div>
    </div>
  )
}

export default NotFound
