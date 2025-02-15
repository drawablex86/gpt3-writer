import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Gandhi GPT" key="title"/>
        <meta property="og:description" content="An AI powered chatbot that responds like Gandhi" key="description"/>
        <meta property="og:url" content="https://gandhi-gpt.vercel.app/" />
        <meta
          property="og:image"
          content=""
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
