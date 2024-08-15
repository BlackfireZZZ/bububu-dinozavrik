import React from 'react';
import '../Ship1.css';

const Ship1 = () => {
    return (
        <div className="ship-container">
            <div className="ship-top-right-text">
                <p style={{color: 'white'}}>текст x 20</p>
            </div>
            <div className="ship-images-container">
                <img src={require("../assets/Ship1.jpg")} alt="Sea 1" className="ship-image" />
                <img src={require("../assets/Ship2.jpg")} alt="Sea 2" className="ship-image" />
            </div>
            <img className="ship-wave" src={require("../assets/icons/wave.png")}/>
        </div>
    );
};

export default Ship1;
