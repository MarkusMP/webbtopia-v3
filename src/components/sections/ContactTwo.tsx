import 'react-toastify/dist/ReactToastify.css'

import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'

import {IContact} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'

const Contact = ({
  btnText,
  description,
  descriptionTwo,
  email,
  formText,
  image,
  info,
  subTitle,
  title,
  descriptionTwoTitle,
}: IContact) => {
  const [name, setName] = useState('')
  const [emailState, setEmailState] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    fetch('https://webbtopia.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email: emailState, message}),
    })
      .then(() => {
        toast.success(
          router.locale === 'sv' ? `E-postmeddelandet har skickats!` : `Email sent successfully!`
        )
      })
      .catch(() => {
        toast.error(
          router.locale === 'sv' ? `Det gick inte att skicka e-post.` : `Error sending email.`
        )
      })
  }

  const imageUrl =
    image &&
    urlForImage(image as any)
      ?.height(300)
      ?.url()

  return (
    <section className="mx-auto flex flex-col items-center justify-between px-8 py-12 lg:flex-row xl:container">
      <div className="relative w-full pt-6 lg:w-5/12 lg:pr-4 lg:pt-0">
        <h3 className="pb-3 tracking-widest text-primary">{subTitle && subTitle}</h3>
        <h2 className="text-2xl font-semibold tracking-wider text-dark sm:text-4xl">
          {title && title}
        </h2>

        {description && <p className="pt-6 text-gray">{description}</p>}
        {descriptionTwoTitle && <h4 className="pt-3 font-bold text-dark">{descriptionTwoTitle}</h4>}

        {descriptionTwo && <p className="pt-3 text-gray">{descriptionTwo && descriptionTwo}</p>}

        <div className="flex flex-col py-6 xs:flex-row xs:items-center">
          <div className="relative flex min-h-[75px] min-w-[75px]  max-w-[75px] overflow-hidden rounded-full">
            <Image src={imageUrl as any} fill alt={image?.alt || ''} className="object-cover" />
          </div>
          <div className="pt-2 xs:pl-3">
            <h5 className="font-bold">{info && info}</h5>
            <a
              className="break-all pt-4 text-gray transition-colors hover:text-primary sm:break-normal"
              href={`mailto:${email && email}`}
            >
              {email && email}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 lg:pl-4">
        <form className="mb-6 rounded-lg bg-white p-4 shadow md:p-12" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col pb-6 sm:flex-row">
            <div className="flex w-full flex-col pb-6 pr-2 sm:w-1/2 sm:pb-0">
              <label htmlFor="name" className="text-dark">
                {router.locale === 'en' ? 'Name' : 'Namn'} <span className="text-primary">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder={router.locale === 'en' ? 'Name' : 'Namn'}
                className="border-b-2 border-gray p-2 text-dark focus:outline-none"
              />
            </div>
            <div className="flex w-full flex-col sm:w-1/2 sm:pl-2">
              <label htmlFor="email" className="text-dark">
                Email <span className="text-primary">*</span>
              </label>
              <input
                value={emailState}
                onChange={(e) => setEmailState(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder={router.locale === 'en' ? 'Your email' : 'Din email'}
                className="border-b-2 border-gray p-2 text-dark focus:outline-none"
              />
            </div>
          </div>
          <div className="flex w-full flex-col pb-6 pt-6">
            <label htmlFor="message">
              {router.locale === 'en' ? 'What can i help you with?' : 'Vad kan jag hjälpa dig med?'}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              rows={3}
              placeholder={
                router.locale === 'en'
                  ? 'Please add any additional details that may be useful.'
                  : 'Lägg till ytterligare information som kan vara lämpligt.'
              }
              className="border-b-2 border-gray p-2 text-dark focus:outline-none"
            />
          </div>
          <button className="blinker block w-full rounded-full bg-primary px-14 py-3 tracking-wider text-white transition-colors hover:bg-primary_accent sm:w-1/3">
            {btnText && btnText}
          </button>
        </form>
        <p className="text-gray">
          <span className="text-primary">*</span> {formText && formText}
        </p>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
