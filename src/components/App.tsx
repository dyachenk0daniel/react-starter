import React, { FC } from "react";
import styles from "./App.module.scss";
import Image from "../assets/tutorial.svg";

const App: FC = () => {
  const { app, ohMy } = styles;
  return (
    <div className={app}>
      {/* <span className={ohMy}>Oh, my &#10084;</span>  */}
      <Image />
    </div>
  );
};

export default App;
