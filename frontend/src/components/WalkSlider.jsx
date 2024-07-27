import React, { useState } from 'react';
import Walk1 from "./Walk1";
import Walk2 from "./Walk2";
import Walk3 from "./Walk3";
import Walk4 from "./Walk4";
import Walk5 from "./Walk5";
import Walk6 from "./Walk6";
import Walk7 from "./Walk7";

const components = [
    { Component: Walk1, props: { text: "Текст первого компонента" } },
    { Component: Walk2, props: { text: "Текст второго компонента" } },
    { Component: Walk3, props: { text: "Текст третьего компонента" } },
    { Component: Walk4, props: { text: "Текст четвертого компонента" } },
    { Component: Walk5, props: { text: "Текст пятого компонента" } },
    { Component: Walk6, props: { text: "Текст шестого компонента" } },
    { Component: Walk7, props: { text: "Текст седьмого компонента" } }
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