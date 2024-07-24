import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import * as mm from 'music-metadata';
import '../MusicPlayer.css'
import songFile from '../assets/music/Snowman.mp3'; // Путь к mp3 файлу

const MusicPlayer = ({img_src, song_src, title, artist}) => {
    return (
        <div className="music-player">
            <img src={img_src} alt="Song Cover" className="song-cover" />
            <div className="song-info">
                <div className="song-title">{title}</div>
                <div className="song-artist">{artist}</div>
            </div>
            {<ReactAudioPlayer src={song_src} controls />}
        </div>
    );
};

export default MusicPlayer;
