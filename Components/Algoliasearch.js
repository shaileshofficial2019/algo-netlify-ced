import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
const searchClient = algoliasearch(
  'KJH0XYL1BE',
  '915e8aaa9d44c1abc0606a5a58b7ecb1'
);
export default function Algoliasearch(){
  return <InstantSearch
    indexName="netlify_29bacbcb-7b82-4e5d-92b8-80d58d0299d2_main_all"
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits />
  </InstantSearch>
}
