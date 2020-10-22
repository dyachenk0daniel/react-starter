import React from "react";
import styles from "./App.module.scss";

const App = (): JSX.Element => {
  const { app, ohMy } = styles;
  return (
    <div className={app}>
      <span className={ohMy}>Oh, my &#10084;</span> 
    </div>
  );
};

export default App;
