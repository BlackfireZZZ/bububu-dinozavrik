import React from 'react';
import '../Begin.css';
import '../Walk3.css';

const Walk7 = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{width: '30%', margin: '10px'}}>
                <img src={require("../assets/walk24.jpg")} style={{width: '100%'}} alt="Small1" className="small-image"/>
                <img src={require("../assets/walk27.jpg")} style={{width: '100%'}} alt="Small2" className="small-image"/>
            </div>
            <div style={{width: '30%', margin: '10px'}}>
                <img src={require("../assets/walk25.jpg")} style={{width: '100%'}} alt="Small1" className="small-image"/>
                <img src={require("../assets/walk26.jpg")} style={{width: '100%'}} alt="Small2" className="small-image"/>
            </div>
        </div>
    );
};

export default Walk7;
