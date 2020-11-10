import React, { FunctionComponent } from 'react';
import styles from './App.module.scss';

const App: FunctionComponent = () => {
  const { app, app__title } = styles;

  return (
    <div className={app}>
      <h1 className={app__title}>I &#10084; React</h1>
    </div>
  );
};

export default App;
