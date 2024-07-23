import React from 'react';
import Slider from './components/Slider';
import Timeline from "./components/Timeline";
import RoundVideos from "./components/RoundVideos";
import video from './assets/RoundVideos/video.mp4';  // Импортируем видеофайл
import './App.css';

function App() {
    return (
        <div className="App">
            <Slider />
        </div>
    );
}

export default App;
