import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from '../Wrapper';

interface IItem {
  link?: string;
  name: string;
}

interface IProps {
  items: string[];
}

function BreadcrumbItem({ name, link }: IItem) {
  return (
    <li className="inline-flex text-sm text-gray-450 last:after:hidden after:content-['>'] after:mx-2 last:font-semibold">
      {link ? (
        <Link
          to={link}
          className="inline-flex text-gray-450 hover:text-gray-450 no-underline hover:underline"
        >
          {name}
        </Link>
      ) : (
        <span className="text-gray-450 inline-flex">{name}</span>
      )}
    </li>
  );
}

BreadcrumbItem.defaultProps = {
  link: '',
};

function Breadcrumb({ items }: IProps) {
  return (
    <nav className="w-full">
      <Wrapper>
        <ul className="w-full list-none flex flex-wrap py-4">
          <BreadcrumbItem key={uuidv4()} name="Home" link="/" />

          {items.length > 0 &&
            items.map((item: string) => (
              <BreadcrumbItem key={uuidv4()} name={item} />
            ))}
        </ul>
      </Wrapper>
    </nav>
  );
}

export default Breadcrumb;
