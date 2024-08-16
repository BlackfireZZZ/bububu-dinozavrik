import React from 'react';
import '../Begin.css';
import '../Walk3.css';

const Walk7 = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(0, 0, 100)', minHeight: '100vh'}}>
            <div style={{width: '30%', margin: '10px'}}>
                <img src={require("../assets/walk24.jpg")} style={{width: '100%', borderRadius: '20px'}} alt="Small1"/>
                <img src={require("../assets/walk27.jpg")} style={{width: '100%', borderRadius: '20px'}} alt="Small2"/>
            </div>
            <div style={{width: '30%', margin: '10px'}}>
                <img src={require("../assets/walk25.jpg")} style={{width: '100%', borderRadius: '20px'}} alt="Small1"/>
                <img src={require("../assets/walk26.jpg")} style={{width: '100%', borderRadius: '20px'}} alt="Small2"/>
            </div>
        </div>
    );
};

export default Walk7;
