import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { arrRoutes, IRoutes } from './routes';

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {arrRoutes
          .filter((item: IRoutes) => item.active)
          .map(({ path, container: Container }: IRoutes) => (
            <Route path={path} element={<Container />} />
          ))}
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoutes;
