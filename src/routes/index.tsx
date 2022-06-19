import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../containers/NotFound';
import { arrRoutes, IRoutes } from './routes';

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {arrRoutes
          .filter((item: IRoutes) => item.active)
          .map(({ path, container: Container }: IRoutes) => (
            <Route key={uuidv4()} path={path} element={<Container />} />
          ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoutes;
