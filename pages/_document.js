import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
      </Head>
        <script type="text/javascript">
            docsearch({
        container: '#docsearch',
        appId: process.env.DOC_APP_ID,
        apiKey: process.env.DOC_API_KEY,
        indexName: process.env.DOC_INDEX_NAME,
        getMissingResultsUrl({ query }) {
            return `https://github.com/shaileshofficial2019/algo-netlify-ced/issues/new?title=${query}`;
         }});
            </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
