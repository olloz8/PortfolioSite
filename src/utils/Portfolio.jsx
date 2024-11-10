// Portfolio.jsx
import React from "react";
import Header from "./Header";
import '../assets/scss/_portfolio.scss';
import project_1 from "../assets/img/img1.jpg";
import project_2 from "../assets/img/img2.jpg";

const PORTFOLIO_INTRO = [
    {
        id: "intro_title",
        p: '제 포트폴리오에 오신 것을 환영합니다!',
        strong: '“여기는 제가 진행한 프로젝트와 경험을 소개하는 공간입니다.”',
    },
    {
        id: "intro_description",
        p: '저는 다양한 기술과 도구를 활용하여 여러 프로젝트를 성공적으로 수행해왔습니다. 이러한 경험을 통해 문제 해결 능력과 실무 기술을 발전시켰습니다.',
        strong: '“이 포트폴리오를 통해 저의 성장 과정을 확인해 주세요.”',
    }
];

const PROJECTS = [
    {
        id: "project_1",
        title: '의류 쇼핑몰',
        description: '이 프로젝트는 의류 쇼핑몰 웹사이트입니다. 사용한 기술은 JAVA, JS, JDBC, MYSQL, Spring Boot입니다.',
        image: project_1,
    },
    {
        id: "project_2",
        title: '강아지 산책 관리 어플',
        description: '이 프로젝트는 강아지 산책 관리 어플입니다. 사용한 기술은 JAVA, FireBase, Android Studio입니다.',
        image: project_2,
    },
];

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio">
                {/* 포트폴리오 소개 섹션 */}
                {PORTFOLIO_INTRO.map(item => (
                    <div key={item.id}>
                        <p>{item.p}</p>
                        <strong>{item.strong}</strong>
                    </div>
                ))}

                {/* 프로젝트 섹션 */}
                <h2>나의 프로젝트</h2>
                {PROJECTS.map(item => (
                    <div key={item.id} className="project">
                        <h3>{item.title}</h3>
                        {item.image && (
                            <div className="image"> {/* 클래스 이름 변경 */}
                                <img src={item.image} alt={item.title} /> {/* 이미지 추가 */}
                            </div>
                        )}
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Portfolio;
