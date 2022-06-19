import { FC } from 'react';

import Home from '../containers/Home';
import SearchResults from '../containers/SearchResults';
import Details from '../containers/Details';
import NotFound from '../containers/NotFound';

interface IContainerProps {
  [key: string]: string | number;
}

interface IRoutes {
  path: string;
  active: boolean;
  private: boolean;
  containerProps: IContainerProps;
  container: FC;
}

export const arrRoutes: IRoutes[] = [
  {
    path: '/',
    active: true,
    private: false,
    containerProps: {},
    container: Home,
  },
  {
    path: '/items',
    active: true,
    private: false,
    containerProps: {},
    container: SearchResults,
  },
  {
    path: '/items/:id',
    active: true,
    private: false,
    containerProps: {},
    container: Details,
  },
  {
    path: '/404',
    active: true,
    private: false,
    containerProps: {},
    container: NotFound,
  },
];

export default { arrRoutes };
export type { IRoutes };
