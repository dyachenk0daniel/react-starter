import Home from 'screens/Home';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  }
].map(route => ({
  ...route,
  path: `/:lng?${route.path}`,
}));

export default routes;
