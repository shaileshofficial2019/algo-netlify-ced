import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const dd= `algoliasearchNetlify({
        appId:'KJH0XYL1BE',
        apiKey:'915e8aaa9d44c1abc0606a5a58b7ecb1',
        siteId:'29bacbcb-7b82-4e5d-92b8-80d58d0299d2',
        branch:'master',
        selector:'div#search'
    });`
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
      </Head>
        <script type="text/javascript">
            {dd}
            </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
