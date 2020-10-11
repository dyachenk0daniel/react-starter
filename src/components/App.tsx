import React from "react";
import HourglassIcon from "./../assets/hourglass.svg";
import { MyWindow } from "../types";
import styles from './App.module.scss'

const App = () => {
    console.log((window as MyWindow).config.baseUrl);

    return (
        <div className={styles.app}>
            <HourglassIcon />
            sdf
        </div>
    );
};

export default App;
