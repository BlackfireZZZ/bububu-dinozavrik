import React from 'react';
import '../Difference3.css';
import Difference8Image from '../assets/Difference8.jpg';
import Difference9Image from '../assets/Difference9.jpg';
import Difference11Image from '../assets/Difference11.jpg';

const Difference2 = () => {
    return (
        <div className="difference3-container">
            <h1 className="difference3-header">Я люблю тебя страстную</h1>
            <div className="difference3-media">
                <img src={Difference8Image} alt="Difference8" className="media-element-df3"/>
                <img src={Difference9Image} alt="Difference9" className="media-element-df3"/>
                <img src={Difference11Image} alt="Difference2" className="media-element-df3"/>
            </div>
        </div>
    );
};

export default Difference2;
