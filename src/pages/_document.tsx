import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-background bg-[url(/images/dots.svg)] bg-repeat text-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
