import React from 'react';
import '../Ship1.css';
import RoundVideo from "./RoundVideo";

const Ship5 = () => {
    return (
        <div className="ship-container">
            <div className="ship-images-container">
                <img src={require("../assets/Ship9.jpg")} alt="Sea 1" className="ship-image" />
                <RoundVideo src={require("../assets/RoundVideos/Ship.mp4")} alt="Sea 2" />
            </div>
        </div>
    );
};

export default Ship5;
