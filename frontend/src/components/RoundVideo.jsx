import React, { useRef, useState } from 'react';
import '../Begin.css';  // Подключение стилей

const RoundVideo = ({ src, label }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="round-video-container">
            <div
                style={{
                    width: '100%', // Размер кружочка, можно изменить
                    height: 'auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={handleVideoClick}
            >
                <video style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                }}
                       ref={videoRef}>
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            {/*<div className="block__text">*/}
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px'}}>
                <p>{label}</p>
            </div>
        </div>
    );
};

export default RoundVideo;
