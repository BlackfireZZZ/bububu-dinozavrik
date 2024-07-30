import React from 'react';
import '../Difference.css';
import backgroundImage from '../assets/Sea.jpg';

const Difference = () => {
    return (
        <div className="full-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <h1 className="main-header">Ты бываешь очень разной</h1>
                <div className="text-box top-left-box">
                    Я знаю, что тебе это часто пугает. Твои личности, которые хотят разного.
                </div>
                <div className="text-box bottom-right-box">
                    Про будущее я тебе потом скажу, но, милая, то, какая ты разная, это и <b>делает тебя тобой</b>.
                    Все эти грани тебя выстраивают ту девушку которую, я люблю.
                </div>
            </div>
        </div>
    );
};

export default Difference;
