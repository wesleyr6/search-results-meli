import Head from '../../components/Head';
import MasterPage from '../../components/MasterPage';

function NotFound() {
  return (
    <>
      <Head title="Página no encontrada" />
      <MasterPage>404</MasterPage>
    </>
  );
}

export default NotFound;
