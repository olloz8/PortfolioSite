// Intro.jsx
import React from "react";
import Header from "./Header";
import '../assets/scss/_stack.scss';
import stack1 from "../assets/img/stack1.jpg";

const STACK_INTRODUCE = [
    {
        id: "stack",
        p: '스택입니다.',
        image: stack1,
        strong: '“저는 주어진 목표를 달성하기 위해 끊임없이 나아가며 이를 위해 꾸준히 노력하고 있습니다.”',

    },
];

const Stack = () => {
    return (
        <div>
            <section id="stack">
                {/* INTRO_FIRST Section */}
                {STACK_INTRODUCE.map(item => (
                    <div key={item.id}>
                        <p>{item.p}</p>
                        <strong>{item.strong}</strong>
                        {item.image && <img src={item.image} alt="스택 이미지" className="stack-image" />} {/* 클래스 추가 */}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Stack;
