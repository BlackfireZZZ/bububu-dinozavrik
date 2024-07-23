import React, { useRef, useState } from 'react';

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
        <div
            style={{
                width: '200px', // Размер кружочка, можно изменить
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={handleVideoClick}
        >
            <video style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
                   ref={videoRef}>
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
};

export default RoundVideo;