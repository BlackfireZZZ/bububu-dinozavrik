import React from 'react';
import '../Difference1.css';
import Difference1Image from '../assets/Difference1.jpg';
import Difference2Image from '../assets/Difference2.jpg';
import Difference3Image from '../assets/Difference3.jpg';
import Difference1Video from '../assets/Difference1.mp4';

const Difference1 = () => {
    return (
        <div className="difference1-container">
            <h1 className="difference1-header">Я люблю тебя, когда ты нежная, трепетная, ласковая.</h1>
            <div className="difference1-images">
                <img src={Difference1Image} alt="Difference1" className="media-element-df1" />
                <img src={Difference2Image} alt="Difference2" className="media-element-df1" />
                <img src={Difference3Image} alt="Difference3" className="media-element-df1" />
            </div>
            <div className="difference1-video">
                <video src={Difference1Video} controls className="media-element-df1" />
            </div>
        </div>
    );
};

export default Difference1;
