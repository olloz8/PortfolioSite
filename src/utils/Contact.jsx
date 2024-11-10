import React from "react";
import '../assets/scss/_contact.scss';
const contactlink = [
    {
        link: "mailto:202244028@itc.ac.kr", // mailto 링크 추가
        title: "mail : 202244028@itc.ac.kr",
    },
    {
        link: "https://github.com/olloz8", // 깃허브 링크
        title: "GitHub: olloz8",
    },
];

const ReachOut = () => {
    return (
        <section id="reachOut">
            <div className="reachOut__container">
                <h2 className="reachOut__heading">연락을 기다리겠습니다.</h2>
                <div className="reachOut__divider">
                    <span className="divider__line"></span>
                </div>
                <div className="reachOut__details">
                    {/* contactlink 배열을 순회하며 링크와 제목을 표시 */}
                    {contactlink.map((item, index) => (
                        <div key={index} className="contactInfo">
                            <a href={item.link} target="_blank" rel="noreferrer">
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="reachOut__divider bottom">
                    <span className="divider__line"></span>
                </div>
            </div>
        </section>
    );
};

export default ReachOut;
