import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'

import {FooterMenuItems, FooterPayload, HeaderMenuItemPayload, socialItem} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const Footer = ({data}: {data: FooterPayload}) => {
  const router = useRouter()

  const imageUrl =
    data.image &&
    urlForImage(data.image as any)
      ?.width(200)
      ?.url()
  return (
    <footer className="mx-auto flex flex-col justify-between py-8 px-8 md:flex-row xl:container">
      <div className="mr-0 pb-8 sm:pb-0 md:mr-8">
        {data.image && (
          <Link href={router.locale === 'en' ? '/' : '/sv'}>
            <Image src={imageUrl as any} width={200} height={50} alt={data.image?.alt || ''} />
          </Link>
        )}
        <a
          className="break-all pt-4 transition-colors hover:text-primary xs:text-lg sm:break-normal"
          href={`mailto:${data.emailText && data.emailText}`}
        >
          {data.emailText && data.emailText}
        </a>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
        {data.menuItems.map((item: FooterMenuItems) => (
          <div key={item._id} className="pr-6 pt-2 md:pt-0">
            <h2 className="blinker pb-4 text-lg font-bold">{item.title}</h2>
            <ul>
              {item.menuItems.map((item: HeaderMenuItemPayload) =>
                item._type === 'home' ? (
                  <li
                    key={item._id}
                    className="pb-2 text-secondary transition-colors hover:text-primary "
                  >
                    <Link href={router.locale === 'en' ? '/' : '/sv'}>{item.title}</Link>
                  </li>
                ) : (
                  <li
                    key={item._id}
                    className="pb-2 text-secondary transition-colors hover:text-primary "
                  >
                    <Link href={`/${item.slug}`}>{item.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
        <div className="pr-6 pt-2 md:pt-0">
          <h2 className="blinker pb-4 text-lg font-bold">{data.socialTitle && data.socialTitle}</h2>
          <ul>
            {data.social &&
              data.social.map((item: socialItem) => (
                <li
                  key={item._key}
                  className="pb-2 capitalize text-secondary transition-colors hover:text-primary "
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      (item?.media === 'facebook' && 'facebook') ||
                      (item?.media === 'instagram' && 'instagram') ||
                      (item?.media === 'twitter' && 'twitter') ||
                      (item?.media === 'linkedin' && 'linkedin') ||
                      ((item?.media === 'youtube' && 'youtube') as string)
                    }
                    href={item.url}
                  >
                    {item.media}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
