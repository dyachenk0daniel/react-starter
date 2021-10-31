import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import ErrorHandling from 'components/ErrorHandling';
import RoutingManager from 'components/RoutingManager';
import setupTheme from 'utils/setupTheme';

import 'styles/globals.scss';
import '@/i18n';

setupTheme();

const rootContainer = document.querySelector('body > #root');

function App() {
  return <RoutingManager />;
}

ReactDOM.render(
  <StrictMode>
    <ErrorHandling>
      <App />
    </ErrorHandling>
  </StrictMode>,
  rootContainer
);
