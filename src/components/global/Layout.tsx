import React from 'react'

import {FooterPayload, HeaderPayload} from '../../page/types'
import Footer from './Footer'
import Header from './Header'

const Layout = ({
  children,
  header,
  footer,
}: {
  children: React.ReactNode
  header: HeaderPayload
  footer: FooterPayload
}) => {
  return (
    <>
      <Header data={header} />
      <div className="flex flex-col">
        <main className="flex-grow overflow-hidden">{children}</main>
      </div>
      <Footer data={footer} />
    </>
  )
}

export default Layout
