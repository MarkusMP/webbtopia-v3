import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useEffect, useRef, useState} from 'react'

import {HeaderMenuItemPayload, HeaderPayload} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'
import DropDown from '../DropDown'

const Header = ({data}: {data: HeaderPayload}) => {
  const menuRef = useRef(null)
  const [navbar, setNavbar] = useState(false)
  const [open, setOpen] = useState(false)
  const [background, setBackground] = useState(false)
  const router = useRouter()

  const handleOnMouseEnter = () => {
    setBackground(true)
  }
  const handleOnMouseLeave = () => {
    setBackground(false)
  }

  const changeBackground = () => {
    if (window.scrollY >= 16) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    const handler = (e: any) => {
      // @ts-ignore: Unreachable code error
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    changeBackground()
    // adding the event when scroll change background
    document.addEventListener('mousedown', handler)
    window.addEventListener('scroll', changeBackground)
    return () => {
      document.removeEventListener('mousedown', handler)
      window.removeEventListener('scroll', changeBackground)
    }
  })

  const imageUrl =
    data.image &&
    urlForImage(data.image as any)
      ?.width(350)
      ?.url()
  return (
    <header
      ref={menuRef}
      className={
        navbar
          ? `fixed z-[10] mb-[80px] h-[80px] w-full bg-white bg-opacity-100 transition-opacity group-hover:bg-white`
          : `fixed z-[10] mb-[80px] h-[80px] w-full bg-white ${
              open
                ? `${background ? 'bg-opacity-100' : 'bg-opacity-100 lg:bg-transparent'}`
                : `${background ? 'bg-opacity-100' : 'bg-transparent'}`
            } transition-opacity group-hover:bg-white`
      }
    >
      <nav className="relative mx-auto flex h-full items-center justify-between px-8 xl:container">
        <div className="mr-2 xl:mr-0">
          <Link href={router.locale === 'en' ? '/' : '/sv'}>
            <Image src={imageUrl as any} width={200} height={50} alt={data.image?.alt || ''} />
          </Link>
        </div>
        <ul
          className={
            open
              ? `absolute left-0 top-[80px] w-full bg-white px-8 py-4 lg:relative lg:left-auto lg:top-[0px] lg:mt-0 lg:flex lg:w-auto lg:bg-transparent`
              : `hidden lg:flex`
          }
        >
          {data.menuItems &&
            data.menuItems.map((item: HeaderMenuItemPayload) =>
              item._type === 'home' ? (
                <li
                  key={item._id}
                  className="blinker pb-2 text-secondary transition-colors hover:text-primary lg:px-2 lg:pb-0 "
                >
                  <Link href={router.locale === 'en' ? '/' : '/sv'}>{item.title}</Link>
                </li>
              ) : item.linkItems && item.linkItems.length > 0 ? (
                <div key={item._id} className="group-hover">
                  <DropDown
                    item={item}
                    handleOnMouseEnter={handleOnMouseEnter}
                    handleOnMouseLeave={handleOnMouseLeave}
                  />
                </div>
              ) : (
                <li
                  key={item._id}
                  className="blinker pb-2 text-secondary transition-colors hover:text-primary lg:px-2 lg:pb-0"
                >
                  <Link href={`/${item.slug}`}>{item.title}</Link>
                </li>
              )
            )}
          <div className="blinker py-2 lg:block lg:hidden lg:py-0">
            <Link
              className="mr-6 text-secondary transition-colors hover:text-primary lg:mr-0 lg:p-6"
              href={'/'}
              locale={router.locale === 'en' ? 'sv' : 'en'}
            >
              {router.locale === 'en' ? 'SV' : 'ENG'}
            </Link>
            {data.btnText && (
              <Link
                className="rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                href={`/${data.link?.slug}`}
              >
                {data.btnText}
              </Link>
            )}
          </div>
        </ul>

        <div className="blinker hidden py-2 lg:block lg:block lg:py-0">
          <Link
            className="mr-6 text-secondary transition-colors hover:text-primary lg:mr-0 lg:p-6"
            href={'/'}
            locale={router.locale === 'en' ? 'sv' : 'en'}
          >
            {router.locale === 'en' ? 'SV' : 'ENG'}
          </Link>
          {data.btnText && (
            <Link
              className="rounded-full border-2 border-primary px-8 py-3 text-primary transition-colors hover:bg-primary hover:text-white"
              href={`/${data.link?.slug}`}
            >
              {data.btnText}
            </Link>
          )}
        </div>

        <button
          className={
            open
              ? 'open hamburger z-[3] flex cursor-pointer items-center px-3 py-1 text-xl leading-none text-primary outline-none focus:outline-none lg:hidden'
              : 'hamburger z-[3] flex cursor-pointer items-center px-3 py-1 text-xl leading-none text-primary outline-none focus:outline-none lg:hidden'
          }
          type="button"
          onClick={() => setOpen((prevState) => !prevState)}
          aria-label="Hamburger menu"
        >
          <span className="hamburger-top bg-dark"></span>
          <span className="hamburger-middle bg-dark"></span>
          <span className="hamburger-bottom bg-dark"></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
