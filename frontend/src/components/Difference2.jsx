import React from 'react';
import '../Difference2.css';
import Difference6Image from '../assets/Difference6.jpg';
import Difference7Image from '../assets/Difference7.jpg';

const Difference2 = () => {
    return (
        <div className="difference2-container">
            <h1 className="difference2-header">Я люблю тебя глубокую, мудрую</h1>
            <div className="difference2-media">
                <img src={Difference6Image} alt="Difference1" className="media-element" />
                <img src={Difference7Image} alt="Difference2" className="media-element" />
            </div>
        </div>
    );
};

export default Difference2;
