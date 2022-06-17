import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import Card from '../../components/Card';
import useQuery from '../../hooks/useQuery';
import { getResults } from '../../actions/items';
import Loader from '../../components/Loader';

function SearchResults() {
  const query = useQuery();
  const querySearch = query.get('search') ?? '';

  const [loadingResults, setLoadingResults] = useState(true);
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    if (querySearch) {
      try {
        const { data }: any = await getResults(querySearch);

        setResults(data.items);
        setLoadingResults(false);
      } catch (err) {
        setResults([]);
        setLoadingResults(false);
      }
    } else {
      setResults([]);
      setLoadingResults(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [querySearch]);

  return (
    <div className="w-full">
      <Header />

      <Breadcrumb />

      <Main className="p-4">
        {loadingResults && <Loader />}

        {!loadingResults && (
          <div className="w-full">
            {results.length > 0 ? (
              <ul className="w-full list-none flex flex-wrap flex-col">
                {results.map((item: any) => (
                  <li
                    key={item.id}
                    className="w-full mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-none border-gray-150 inline-flex"
                  >
                    <Card
                      id={item.id}
                      title={item.title}
                      location="Mendoza"
                      currency={item.price.currency}
                      price={item.price.amount}
                      img={item.picture}
                      freeShipping={item.free_shipping}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ningún resultado encontrado</p>
            )}
          </div>
        )}
      </Main>
    </div>
  );
}

export default SearchResults;
