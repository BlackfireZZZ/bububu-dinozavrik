import React from 'react';
import '../Difference4.css';

const Difference4 = () => {
    const videoSrc = require('../assets/Difference11.mp4');
    const imgSrc12 = require('../assets/Difference12.jpg');
    const imgSrc13 = require('../assets/Difference13.jpg');
    const imgSrc14 = require('../assets/Difference14.jpg');
    const imgSrc15 = require('../assets/Difference15.jpg');
    const imgSrc16 = require('../assets/Difference16.jpg');

    return (
        <div className="difference4-container">
            <div className="difference4-header">Люблю тебя сумасшедшую</div>

            <div className="difference4-media">
                <div className="media-container">
                    <div className="media-header">Со мной</div>
                    <div className="media-content">
                        <video className="media-element" src={videoSrc} controls />
                        <div className="media-photos">
                            <img className="media-element" src={imgSrc12} alt="Difference12" />
                            <img className="media-element" src={imgSrc13} alt="Difference13" />
                        </div>
                    </div>
                </div>

                <div className="media-container">
                    <div className="media-content">
                        <img className="media-element large-photo" src={imgSrc14} alt="Difference14" />
                        <div className="media-photos-row">
                            <img className="media-element" src={imgSrc15} alt="Difference15" />
                            <img className="media-element" src={imgSrc16} alt="Difference16" />
                        </div>
                    </div>
                    <div className="media-footer">И с друзьями</div>
                </div>
            </div>
        </div>
    );
};

export default Difference4;
