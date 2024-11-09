import React from "react";

import Intro from "../src/utils/Intro";
import Home from "./utils/Home";
import Header from "./utils/Header";
import Contack from "./utils/Contack";


const MainView = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Intro/>

            <Contack/>
        </>

    );
};

export default MainView;