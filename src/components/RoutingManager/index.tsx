import { Switch, Route } from 'react-router-dom';
import routes from '@/routes';

const RoutingManager = () => {
  /*const { lng } = useParams<{ lng?: string }>();

  if (!lng) return <Redirect to='/en' />;*/

  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route exact={route.exact} path={route.path} key={route.path + index}>
            <route.component />
          </Route>
        );
      })}
    </Switch>
  );
};

export default RoutingManager;
