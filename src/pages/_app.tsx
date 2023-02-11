import '../global.css'

import {Blinker, Roboto} from '@next/font/google'
import {AppProps} from 'next/app'
import PlausibleProvider from 'next-plausible'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
})

const blinker = Blinker({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
        .blinker {
          font-family: ${blinker.style.fontFamily} !important;
        }
      `}</style>
      <PlausibleProvider domain="webbtopia.com">
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  )
}
