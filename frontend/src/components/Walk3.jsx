import React from 'react';
import '../Begin.css';
import '../Walk2.css';


const Walk3 = () => {
    return (
        <div className="walk2-container">
            <div className="left-column">
                <div className="top-image-container">
                    <img src={require("../assets/walk7.jpg")} alt="Big" className="big-image"/>
                    <div className="caption">"Подпись"</div>
                </div>
                <div className="small-images-container">
                    <img src={require("../assets/walk8.jpg")} alt="Small1" className="small-image"/>
                    <img src={require("../assets/walk9.jpg")} alt="Small2" className="small-image"/>
                </div>
            </div>
            <div className="right-column">
                <div className="block__text">
                    <p>Мне нравится неожиданная Москва. То, кого мы можем там встретить: человека,
                        который просит поспорить с ним, добряша репера или какого-нибудь пивозавра.
                        Или как мы можем выйти на неожиданную улицу, найти интересный памятник или красивый балкон.
                        И в миллион раз лучше проживать это с тобой.
                    </p>
                </div>
                <div className="image-container">
                    <img src={require('../assets/walk10.jpg')} alt="Walk" className="main-image"/>
                    <div className="caption">"Подпись"</div>
                </div>
            </div>
        </div>
    );
};

export default Walk3;
