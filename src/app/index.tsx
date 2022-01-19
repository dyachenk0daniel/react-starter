import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorHandling from 'components/ErrorHandling';
import RoutingManager from 'components/RoutingManager';
import Modals from 'components/Modals';
import setupTheme from 'utils/setupTheme';
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
      <BrowserRouter>
        <App />
        <Modals />
      </BrowserRouter>
    </ErrorHandling>
  </StrictMode>,
  rootContainer
);
