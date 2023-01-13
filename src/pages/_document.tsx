import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Blinker:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-background bg-[url(/images/dots.svg)] bg-repeat text-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
