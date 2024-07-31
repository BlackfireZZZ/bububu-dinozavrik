import React from 'react';
import Slider from './components/Slider';
import Timeline from "./components/Timeline";
import RoundVideos from "./components/RoundVideos";
import NewYear from "./components/NewYear";
import FourteenthSlider from "./components/14thSlider";
import Walk1 from "./components/Walk1";
import Walk2 from "./components/Walk2";
import Walk3 from "./components/Walk3";
import Walk4 from './components/Walk4';
import Walk5 from "./components/Walk5";
import Difference from './components/Difference';
import Difference1 from './components/Difference1';
import Difference2 from './components/Difference2';
import Difference3 from './components/Difference3';
import Difference4 from './components/Difference4';
import './App.css';
import WalkSlider from "./components/WalkSlider";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <nav>
                    <Link to="/">Главная </Link>  
                    <Link to="/beginning">Начало </Link>  
                    <Link to="/newyear">Новый год </Link>
                    <Link to='/14th'>14 февраля </Link>
                    <Link to='/ourwalks'>Наши прогулки </Link>
                    <Link to='/diff'>Ты разная </Link>
                    <Link to='/diff1'>(1)</Link>
                    <Link to='/diff2'>(2)</Link>
                    <Link to='/diff3'>(3)</Link>
                    <Link to='/diff4'>(4)</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Timeline/>}/>
                    <Route path="/beginning" element={<Slider/>}/>
                    <Route path="/newyear" element={<NewYear/>}/>
                    <Route path="/14th" element={<FourteenthSlider/>}/>
                    <Route path="/ourwalks" element={<WalkSlider/>}/>
                    <Route path="/diff" element={<Difference />}/>
                    <Route path="/diff1" element={<Difference1 />}/>
                    <Route path="/diff2" element={<Difference2 />}/>
                    <Route path="/diff3" element={<Difference3 />}/>
                    <Route path="/diff4" element={<Difference4 />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
