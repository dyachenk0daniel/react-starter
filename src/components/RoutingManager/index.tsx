import { Switch, Route } from 'react-router-dom';
import routes from '@/routes';

const RoutingManager = () => {
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
