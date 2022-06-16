import Wrapper from '../Wrapper';

function Breadcrumb() {
  return (
    <nav className="w-full">
      <Wrapper>
        <ul className="w-full list-none flex flex-wrap py-4">
          <li className="inline-flex text-sm text-gray-450 last:after:hidden after:content-['>'] after:mx-2 last:font-semibold">
            <a
              href="/"
              className="text-gray-450 hover:text-gray-450 no-underline hover:underline"
            >
              test
            </a>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
}

export default Breadcrumb;
