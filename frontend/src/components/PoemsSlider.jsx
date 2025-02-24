import React, { useState } from 'react';
import Poems1 from "./Poems1";
import Poems2 from "./Poems2";
import Poems3 from "./Poems3";
import Left from '../assets/icons/Stylus-left.png'
import Right from '../assets/icons/Stylus-right.png'

const components = [
    { Component: Poems1, props: { text: "Текст первого компонента" } },
    { Component: Poems2, props: { text: "Текст второго компонента" } },
    { Component: Poems3, props: { text: "Текст третьего компонента" } },
];

const PoemsSlider = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % components.length);
            setAnimating(false);
        }, 500);
    };

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + components.length) % components.length);
            setAnimating(false);
        }, 500);
    };

    const { Component, props } = components[current];

    return (
        <div className={`slider ${animating ? 'fade-out' : ''}`}>
            <Component {...props} backgroundColor="#cfe5ff" />
            <button className="arrow-button left" onClick={handlePrev}>
                <img src={Left} alt="&#8592;" style={{width: '50px', height: 'auto'}}/>
            </button>
            <button className="arrow-button right" onClick={handleNext}>
                <img src={Right} alt="&#8592;" style={{width: '50px', height: 'auto'}}/>
            </button>
        </div>
    );
};

export default PoemsSlider;