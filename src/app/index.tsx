import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import ErrorHandling from 'components/ErrorHandling';

import './styles.scss';
import 'styles/globals.scss';

const rootContainer = document.querySelector('body > #root');

function App() {
  return (
    <div className='app'>
      <h1 className='app__title'>
        I <span className='app__heart'>&#10084;</span> React
      </h1>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <ErrorHandling>
      <App />
    </ErrorHandling>
  </StrictMode>,
  rootContainer
);
