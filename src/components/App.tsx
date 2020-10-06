import React from "react";
import HourglassIcon from "./../assets/hourglass.svg";
//import HippoIconUrl from "./../assets/hippo.png";
import { MyWindow } from "../types";

const App = () => {
    console.log((window as MyWindow).config.baseUrl);

    return (
        <>
            <HourglassIcon />
            {/* <img src={HippoIconUrl} /> */}
        </>
    );
};

export default App;
