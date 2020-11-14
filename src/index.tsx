import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';

const rootContainer = document.querySelector('body > #root');

ReactDOM.render(
  <ErrorHandling>
    <App />
  </ErrorHandling>,
  rootContainer
);
