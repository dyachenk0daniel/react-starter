import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import routes from '@/routes';
import history from 'utils/history';

const RoutingManager = () => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              exact={route.exact}
              path={route.path}
              key={route.path + index}
            >
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default RoutingManager;
