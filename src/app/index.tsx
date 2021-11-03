import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Router } from 'react-router';
import ErrorHandling from 'components/ErrorHandling';
import RoutingManager from 'components/RoutingManager';
import Modals from 'components/Modals';
import setupTheme from 'utils/setupTheme';
import history from 'utils/history';
import 'styles/globals.scss';
import '@/i18n';

setupTheme();

const rootContainer = document.getElementById('root');

function App() {
  return <RoutingManager />;
}

ReactDOM.render(
  <StrictMode>
    <ErrorHandling>
      <Router history={history}>
        <App />
        <Modals />
      </Router>
    </ErrorHandling>
  </StrictMode>,
  rootContainer
);
