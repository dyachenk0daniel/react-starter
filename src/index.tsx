import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';

import './styles/globals.scss'

const rootContainer = document.querySelector('body > #root');

ReactDOM.render(
  <ErrorHandling>
    <App />
  </ErrorHandling>,
  rootContainer
);
