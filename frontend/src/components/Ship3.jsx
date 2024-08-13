import React from 'react';
import '../Ship1.css';

const Ship3 = () => {
    return (
        <div className="ship-container">
            <div className="ship-images-container">
                <img src={require("../assets/Ship5.jpg")} alt="Sea 1" className="ship-image" />
                <img src={require("../assets/Ship6.jpg")} alt="Sea 2" className="ship-image" />
            </div>
        </div>
    );
};

export default Ship3;
