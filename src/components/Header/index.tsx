import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Wrapper from '../Wrapper';
import TextField from '../TextField';
import useQuery from '../../hooks/useQuery';
import IMG_LOGO from '../../assets/images/logo-mercado-libre.png';
import IMG_ICON_SEARCH from '../../assets/images/icon-search.png';

function Header() {
  const navigate = useNavigate();
  const query = useQuery();
  const querySearch = query.get('search') || '';

  const [inputValue, setInputValue] = useState('');

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/items?search=${inputValue}`);
  };

  useEffect(() => {
    if (querySearch) setInputValue(querySearch);
  }, [querySearch]);

  return (
    <header className="w-full bg-primary py-3">
      <Wrapper>
        <div className="w-full flex flex-nowrap">
          <Link to="/" className="inline-flex">
            <img
              src={IMG_LOGO}
              alt="Mercado Libre"
              className="mr-3 sm:mr-6 inline-flex border-none outline-none"
            />
          </Link>

          <form
            className="inline-flex w-full relative flex-nowrap"
            onSubmit={onHandleSubmit}
          >
            <TextField
              defaultValue={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />

            <button
              type="submit"
              className="w-11 h-full inline-flex bg-gray-150 hover:bg-gray-200 duration-300 transition-all justify-center items-center cursor-pointer border-none rounded-tr-xs rounded-br-xs"
            >
              <img src={IMG_ICON_SEARCH} alt="Buscar" />
            </button>
          </form>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
