import React from 'react';
import HomePage from './components/HomePage'
import Slider from './components/Slider';
import Timeline from "./components/Timeline";
import RoundVideos from "./components/RoundVideos";
import NewYear from "./components/NewYear";
import FourteenthSlider from "./components/14thSlider";
import DiffSlider from './components/DiffSlider';
import Sea from "./components/Sea";
import ShipSlider from "./components/ShipSlider";
import './App.css';
import WalkSlider from "./components/WalkSlider";
import PoemsSlider from "./components/PoemsSlider";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                {/* <nav> */}
                    {/* <Link to="/">Главная </Link>   */}
                    {/* <Link to="/beginning">Начало </Link>   */}
                    {/* <Link to="/newyear">Новый год </Link> */}
                    {/* <Link to='/14th'>14 февраля </Link> */}
                    {/* <Link to='/ourwalks'>Наши прогулки </Link> */}
                    {/* <Link to='/diff'>Ты разная </Link> */}
                    {/* <Link to='/diff1'>(1) </Link> */}
                    {/* <Link to='/diff2'>(2) </Link> */}
                    {/* <Link to='/diff3'>(3) </Link> */}
                    {/* <Link to='/diff4'>(4) </Link> */}
                    {/* <Link to='/sea'>Море </Link> */}
                    {/* <Link to='/ship'>Корабль </Link> */}
                {/* </nav> */}
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/beginning" element={<Slider/>}/>
                    <Route path="/newyear" element={<NewYear/>}/>
                    <Route path="/14th" element={<FourteenthSlider/>}/>
                    <Route path="/ourwalks" element={<WalkSlider/>}/>
                    <Route path="/timeline" element={<Timeline />}/>
                    <Route path="/diff" element={<DiffSlider />}/>
                    <Route path="/sea" element={<Sea />}/>
                    <Route path="/ship" element={<ShipSlider />}/>
                    <Route path="/poems" element={<PoemsSlider />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
