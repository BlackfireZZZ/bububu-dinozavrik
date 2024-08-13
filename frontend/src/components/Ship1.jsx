import React from 'react';
import '../Ship1.css';

const Ship1 = () => {
    return (
        <div className="ship-container">
            <div className="ship-top-right-text">
                <p>текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст</p>
            </div>
            <div className="ship-images-container">
                <img src={require("../assets/Ship1.jpg")} alt="Sea 1" className="ship-image" />
                <img src={require("../assets/Ship2.jpg")} alt="Sea 2" className="ship-image" />
            </div>
        </div>
    );
};

export default Ship1;
