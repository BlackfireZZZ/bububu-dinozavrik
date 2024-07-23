import React from 'react';
import RoundVideo from './RoundVideo';
import '../RoundVideos.css';  // Подключение стилей

const RoundVideos = () => {
    return (
        <div className="round-videos">
            <h2>Я люблю твои кружочки</h2>
            <div className="video-row">
                <RoundVideo src={require('../assets/RoundVideos/video.mp4')} label="Как ты поправляешь волосы" />
                <RoundVideo src={require('../assets/RoundVideos/video6.mp4')} label="Как ты снимаешь Мартина" />
                <RoundVideo src={require('../assets/RoundVideos/video4.mp4')} label="Твои сумасшедшие кружочки" />
                <RoundVideo src={require('../assets/RoundVideos/video3.mp4')} label="Твои неинформативные и заспанные кружочки" />
            </div>
            <div className="video-row">
                <RoundVideo src={require('../assets/RoundVideos/video7.mp4')} label="Как ты жестикулируешь и эмоционально что-то рассказываешь" />
                <RoundVideo src={require('../assets/RoundVideos/video8.mp4')} label="Как целуешь камеру" />
                <RoundVideo src={require('../assets/RoundVideos/video6.mp4')} label='"Спокойной ночи, милый" и то, как ты засыпаешь с аксолотликом' />
            </div>
        </div>
    );
};

export default RoundVideos;
