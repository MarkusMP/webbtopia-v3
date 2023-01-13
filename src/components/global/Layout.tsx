import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
