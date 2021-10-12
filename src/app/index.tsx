import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import ErrorHandling from '../components/ErrorHandling/ErrorHandling';

import styles from './index.module.scss';
import '../styles/globals.scss';

const rootContainer = document.querySelector('body > #root');

ReactDOM.render(
  <StrictMode>
    <ErrorHandling>
      <div className={styles.root}>
        <h1 className={styles.title}>
          I <span className={styles.heart}>&#10084;</span> React
        </h1>
      </div>
    </ErrorHandling>
  </StrictMode>,
  rootContainer
);
