// VideoPlayer.js
import React from 'react';
import before_dating1 from "../assets/before_dating1.mp4";
import '../Begin.css';
const VideoPlayer = () => {
    return (
        <div className="block__image-container">
            <video alt="Vertical" className="block__image block__vertical__photo" controls>
                <source src={before_dating1} type="video/mp4" />
                Ваш браузер не поддерживает элемент <code>video</code>.
            </video>
        </div>
    );
};

export default VideoPlayer;
