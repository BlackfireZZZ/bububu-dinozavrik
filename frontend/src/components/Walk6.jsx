import React from 'react';
import '../SPB.css';

const Walk6 = () => {
    return (
        <div className="media-container-spb">
            <div style={{width: '50%', alignSelf: 'center'}}>
                <video className="video" src={require('../assets/SPB.mp4')} controls />
                <div className="photos">
                    <img src={require('../assets/SPB1.jpg')} alt="SPB1" className="photo" />
                    <img src={require('../assets/SPB2.jpg')} alt="SPB2" className="photo" />
                </div>
            </div>  
        </div>
    );
};

export default Walk6;
