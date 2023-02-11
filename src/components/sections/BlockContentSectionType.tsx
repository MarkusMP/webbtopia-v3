import {PortableText} from '@portabletext/react'
import React from 'react'

const blockContentSectionType = ({body}: {body: any}) => {
  const myPortableTextComponents = {
    marks: {
      link: ({children, value}: any) => {
        return (
          <a href={value.href} rel={'noreferrer noopener'} target="_blank" className="text-dark">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <section className="min-h-screen pt-[80px]">
      <div className="container mx-auto max-w-3xl py-12 px-6">
        <div className="prose text-dark marker:text-dark">
          {body && <PortableText value={body} components={myPortableTextComponents} />}
        </div>
      </div>
    </section>
  )
}

export default blockContentSectionType
