import React from 'react';
import '../Begin.css';
import '../Walk3.css';

const Walk7 = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className="small-images-container">
                <img src={require("../assets/walk24.jpg")} alt="Small1" className="small-image"/>
                <img src={require("../assets/walk27.jpg")} alt="Small2" className="small-image"/>
            </div>
            <div className="small-images-container">
                <img src={require("../assets/walk25.jpg")} alt="Small1" className="small-image"/>
                <img src={require("../assets/walk26.jpg")} alt="Small2" className="small-image"/>
            </div>
        </div>
    );
};

export default Walk7;
