import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import * as mm from 'music-metadata';
import songFile from '../assets/music/Snowman.mp3'; // Путь к mp3 файлу

const MusicPlayer = () => {
    return (
        <div className="music-player">
            <img src={require('../assets/music/Snowman.jpg')} alt="Song Cover" className="song-cover" />
            <div className="song-info">
                <div className="song-title">{'Snowman'}</div>
                <div className="song-artist">{'Sia'}</div>
            </div>
            <ReactAudioPlayer src={songFile} controls />
        </div>
    );
};

export default MusicPlayer;
