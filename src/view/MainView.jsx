// MainView.jsx
import React from "react";

import Intro from "../utils/Intro";
import Home from "../utils/Home";
import Header from "../utils/Header";
import Contact from "../utils/Contact";
import Portfolio from "../utils/Portfolio";
import Stack from "../utils/Stack";

// 네비게이션 메뉴 항목 배열
const navigationItems = [
    { title: "Intro", url: "#intro" },
    { title: "My Stack", url: "#stack" },
    { title: "Portfolio", url: "#portfolio" },
    { title: "Contact", url: "#contact" }
];

const MainView = () => {
    return (
        <>
            <Header navItems={navigationItems} />


            <Home/>


            <Intro/>


            <Stack/>


            <Portfolio/>


            <Contact/>
        </>
    );
};

export default MainView;