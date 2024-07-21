// src/components/Slider.js
import React, { useState } from 'react';
import Begin from './Begin';
import Begin2 from './Begin2';
import Begin3 from "./Begin3";
import '../Slider.css';

const components = [
    { Component: Begin, props: { text: "Текст первого компонента" } },
    { Component: Begin2, props: { text: "Текст второго компонента" } },
    { Component: Begin3, props: { text: "Текст третьего компонента" } }
];

const Slider = () => {
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
            <button className="arrow-button left" onClick={handlePrev}>&#8592;</button>
            <button className="arrow-button right" onClick={handleNext}>&#8594;</button>
        </div>
    );
};

export default Slider;
