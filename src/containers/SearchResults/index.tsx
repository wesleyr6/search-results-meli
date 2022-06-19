import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import useQuery from '../../hooks/useQuery';
import { getResults } from '../../actions/items';
import Loader from '../../components/Loader';
import { IItems, ISearchResults } from '../../interfaces/search-results';
import Head from '../../components/Head';
import MasterPage from '../../components/MasterPage';

interface IResults {
  data: ISearchResults;
}

function SearchResults() {
  const query = useQuery();
  const querySearch = query.get('search') || '';

  const [loadingResults, setLoadingResults] = useState<boolean>(true);
  const [results, setResults] = useState<IItems[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  const showEmpty = () => {
    setResults([]);
    setLoadingResults(false);
  };

  const fetchResults = async () => {
    if (querySearch) {
      try {
        const { data }: IResults = await getResults(querySearch);

        setResults([...data.items]);

        if (data.category) {
          setCategory([data.category]);
        }
        setLoadingResults(false);
      } catch (err) {
        showEmpty();
      }
    } else {
      showEmpty();
    }
  };

  useEffect(() => {
    fetchResults();
  }, [querySearch]);

  return (
    <>
      <Head title={querySearch} />
      <MasterPage breadcrumbItems={category}>
        {loadingResults && <Loader />}

        {!loadingResults && (
          <div className="w-full">
            {results.length > 0 ? (
              <ul className="w-full list-none flex flex-wrap flex-col">
                {results.map((item: IItems) => (
                  <li
                    key={item.id}
                    className="w-full mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-none border-gray-150 inline-flex"
                  >
                    <Card
                      id={item.id}
                      currency={item.price.currency}
                      freeShipping={item.free_shipping}
                      location={item.location}
                      picture={item.picture}
                      price={item.price.amount}
                      title={item.title}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ningún resultado encontrado</p>
            )}
          </div>
        )}
      </MasterPage>
    </>
  );
}

export default SearchResults;
