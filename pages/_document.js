import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
        </Head>

        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
