import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
