import React, { useState } from 'react';
import Difference from "./Difference";
import Difference1 from "./Difference1";
import Difference2 from "./Difference2";
import Difference3 from "./Difference3";
import Difference4 from "./Difference4";
import '../Slider.css';

const components = [
    { Component: Difference, props: { text: "Текст первого компонента" } },
    { Component: Difference1, props: { text: "Текст второго компонента" } },
    { Component: Difference2, props: { text: "Текст первого компонента" } },
    { Component: Difference3, props: { text: "Текст второго компонента" } },
    { Component: Difference4, props: { text: "Текст первого компонента" } },
];

const DiffSlider = () => {
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

export default DiffSlider;