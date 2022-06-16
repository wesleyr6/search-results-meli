import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';
import Card from '../../components/Card';

function SearchResults() {
  return (
    <div className="w-full">
      <Header />

      <Breadcrumb />

      <Main className="p-4">
        <ul className="w-full list-none flex flex-wrap flex-col">
          <li className="w-full mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-none border-gray-150">
            <Link to="/items/1" className="w-full flex flex-nowrap">
              <Card
                title="Apple Ipod Touch 5g 16gb negro igual a nuevo completo unico!"
                location="Mendoza"
                price="99.99"
                img="..."
              />
            </Link>
          </li>
        </ul>
      </Main>
    </div>
  );
}

export default SearchResults;
