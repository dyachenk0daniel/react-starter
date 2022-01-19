import Home from 'screens/Home';
import { RouteObject } from 'react-router-dom';
import Layout from 'components/Layout';

const screensRoutes: RouteObject[] = [
  {
    path: '',
    element: <Home />,
  },
];

const languageRoutes: RouteObject[] = [
  {
    path: ':lng',
  },
  {
    path: '/',
  },
];

const routes: RouteObject[] = languageRoutes.map(route => ({
  ...route,
  element: <Layout />,
  children: screensRoutes,
}));

export default routes;
