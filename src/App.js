import React from "react";

import Intro from "../src/utils/Intro";
import Home from "./utils/Home";
import Header from "./utils/Header";
import Contack from "./utils/Contack";
import Portfolio from "./utils/Portfolio";
import Stack from "./utils/Stack";


const MainView = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Intro/>
            <Stack/>
            <Portfolio/>
            <Contack/>
        </>

    );
};

export default MainView;