import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Main from '../../components/Main';

function NotFound() {
  return (
    <div className="w-full">
      <Header />
      <Breadcrumb items={[]} />
      <Main className="p-4">404</Main>
    </div>
  );
}

export default NotFound;
