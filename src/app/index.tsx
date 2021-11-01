import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import ErrorHandling from 'components/ErrorHandling';
import RoutingManager from 'components/RoutingManager';
import setupTheme from 'utils/setupTheme';

import 'styles/globals.scss';
import '@/i18n';
import history from 'utils/history';
import { Router } from 'react-router';

setupTheme();

const rootContainer = document.querySelector('body > #root');

function App() {
  return <RoutingManager />;
}

ReactDOM.render(
  <StrictMode>
    <ErrorHandling>
      <Router history={history}>
        <App />
      </Router>
    </ErrorHandling>
  </StrictMode>,
  rootContainer
);
