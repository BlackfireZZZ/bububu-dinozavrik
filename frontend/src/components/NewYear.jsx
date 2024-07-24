import React from 'react';
import RoundVideo from './RoundVideo';
import MusicPlayer from './MusicPlayer';
import '../NewYear.css';
let snowflakes = Array.from({length: 30}, () => [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
const NewYear = () => {
    return (
        <div className="new-year">
            <h1>У нас был лучший Новый Год</h1>
            <div className="new-year__container">
                <div className="new-year__left">
                    <RoundVideo src={require('../assets/RoundVideos/pizza.mp4')} />
                    <RoundVideo src={require('../assets/RoundVideos/skating_ring.mp4')} />
                </div>
                <div className="new-year__right">
                    <MusicPlayer
                        img_src={require('../assets/music/Прогулка.jpg')}
                        song_src={require('../assets/music/Прогулка.mp3')}
                        title={'Прогулка'}
                        artist={'Земфира'}
                    />
                    <div className="image-container">
                        <img src={require('../assets/NewYear2.jpg')} className="block__image" alt="Прогулка" />
                        <img src={require('../assets/icons/tree.png')} className="tree-icon" alt="Елка" />
                    </div>
                </div>
                {snowflakes.map((coord, index) => (
                    <img src = {require('../assets/icons/Snowflake.png')}
                    style={{position: 'absolute', top: `${coord[0]}%`, left: `${coord[1]}%`, width: '30px', height: 'auto'}}/>
                ))}
            </div>
        </div>
    );
};

export default NewYear;
