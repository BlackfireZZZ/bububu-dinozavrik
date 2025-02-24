import React, { useState } from 'react';
import Ship1 from "./Ship1";
import Ship2 from "./Ship2";
import Ship3 from "./Ship3";
import Ship4 from "./Ship4";
import Ship5 from "./Ship5";
import Right from '../assets/icons/ship-left.png'
import Left from '../assets/icons/ship-right.png'


const components = [
    { Component: Ship1, props: { text: "Текст первого компонента" } },
    { Component: Ship2, props: { text: "Текст второго компонента" } },
    { Component: Ship3, props: { text: "Текст третьего компонента" } },
    { Component: Ship4, props: { text: "Текст четвертого компонента" } },
    { Component: Ship5, props: { text: "Текст пятого компонента" } }
];

const ShipSlider = () => {
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
            <Component {...props} backgroundColor="#cfe5ff"/>
            <button className="arrow-button left" onClick={handlePrev}>
                <img src={Left} alt="&#8592;" style={{width: '50px', height: 'auto'}}/>
            </button>
            <button className="arrow-button right" onClick={handleNext}>
                <img src={Right} alt="&#8592;" style={{width: '50px', height: 'auto'}}/>
            </button>
        </div>
    );
};

export default ShipSlider;