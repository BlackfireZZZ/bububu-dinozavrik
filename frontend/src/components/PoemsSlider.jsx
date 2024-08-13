import React, { useState } from 'react';
import Poems1 from "./Poems1";

const components = [
    { Component: Poems1, props: { text: "Текст первого компонента" } },
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
            <Component {...props} backgroundColor="#cfe5ff" />
            <button className="arrow-button left" onClick={handlePrev}>&#8592;</button>
            <button className="arrow-button right" onClick={handleNext}>&#8594;</button>
        </div>
    );
};

export default ShipSlider;