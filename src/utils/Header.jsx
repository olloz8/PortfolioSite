import React, { useState } from "react";
import '../assets/scss/_header.scss';

//import color에 모든 색 설정.
// 네비게이션 항목 배열을 직관적인 이름으로 정의
const navigationItems = [
    { title: "Intro", url: "#intro" },
    { title: "My Stack", url: "#stack" },
    { title: "Portfolio", url: "#portfolio" },
    { title: "Contact", url: "#reachOut" }
];

const Header = () => {
    // 메뉴의 가시성 상태를 관리
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // 메뉴 토글 함수
    const toggleMenuVisibility = () => {
        setIsMenuVisible((prevVisibility) => !prevVisibility);
    };

    const handleScroll = (e, target) => {
        e.preventDefault(); // 기본 동작 방지
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" }); // 부드럽게 스크롤
        }
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                {/* 로고 영역 */}
                <div className="header__logo">
                    <a href="/">MyProject<em>react.js</em></a>
                </div>

                {/* 네비게이션 메뉴 */}
                <nav className={`header__nav ${isMenuVisible ? "show" : ""}`} role="navigation">
                    <ul>
                        {navigationItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url} // href는 그대로 두고
                                    onClick={(e) => {
                                        e.preventDefault(); // 기본 동작 방지
                                        handleScroll(e, item.url); // 부드럽게 스크롤
                                    }}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>


                {/* 모바일 메뉴 토글 버튼 */}
                <div
                    className="header__nav__mobile"
                    onClick={toggleMenuVisibility}
                    role="button"
                    tabIndex="0"
                >
                    {isMenuVisible ? "Close" : "About Me"}
                </div>
            </div>
        </header>
    );
};

export default Header;