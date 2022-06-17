import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoutes;
