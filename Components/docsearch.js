import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function () {
  const input = useRef(null)
  const {locale} = useRouter()

  useEffect(() => {
    const inputs = ['input', 'select', 'button', 'textarea']

    const down = (e) => {
      if (
        document.activeElement &&
        inputs.indexOf(document.activeElement.tagName.toLowerCase() !== -1)
      ) {
        if (e.key === '/') {
          e.preventDefault()
          input.current?.focus()
        }
      }
    }

    window.addEventListener('keydown', down)
    return () => window.removeEventListener('keydown', down)
  }, [])

  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '915e8aaa9d44c1abc0606a5a58b7ecb1',
        indexName: 'netlify_29bacbcb-7b82-4e5d-92b8-80d58d0299d2_main_all',
        inputSelector: 'input#algolia-doc-search',
        algoliaOptions: { 'facetFilters': locale === 'zh-CN' ? ["tags:cn"] : ["tags:en"] }
      })
    }
  }, [locale])

  return <div className="relative w-full md:w-64 mr-2 docs-search">
    <input
      id="algolia-doc-search"
      className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      type="search"
      placeholder='Search ("/" to focus)'
      ref={input}
    />
  </div>
}
