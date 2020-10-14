import React from "react";
import styles from "./App.module.scss";

export default function App() {
    const { app, ohMy } = styles;
    return (
        <div className={app}>
            <h1 className={ohMy}>Oh, my &#10084;</h1>
        </div>
    );
}
