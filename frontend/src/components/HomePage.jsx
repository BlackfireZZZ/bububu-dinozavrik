import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../HomePage.css'
import BegginingPhoto from '../assets/murmansk7.jpg'
import NewYearPhoto from '../assets/NewYear.jpg'
import ValentinePhoto from '../assets/14th2.jpg'
import WalkPhoto from '../assets/walk3.jpg'
import HomePhoto from '../assets/home4.2.jpg'
import DifferencePhoto from '../assets/Difference9.jpg'
import ShipPhoto from '../assets/Ship7.jpg'
import SeaPhoto from '../assets/sea5.jpg'
import SPBPhoto from '../assets/SPB1.jpg'
import IDKPhoto from '../assets/walk11.jpg'
import EndPhoto from '../assets/SPB2.jpg'
import Dinosaur from '../assets/icons/dino.png'

//link, title, photo
const memories = [
    ['/beginning', '1. Самое самое начало', BegginingPhoto],
    ['/newyear', '2. Новый год', NewYearPhoto],
    ['/14th', '3. 14 февраля', ValentinePhoto],
    ['/timeline', '4. Дом', HomePhoto],
    ['/ourwalks', '5. Наши прогулки', WalkPhoto],
    ['/diff', '6. Ты разная', DifferencePhoto],
    ['/sea', '7. Про море', SeaPhoto],
    ['/ship', '8. Кораблик', ShipPhoto],
    ['/poems', '9. Стихи и цветы', SPBPhoto],
    ['/circles', '10. Твои кружки', IDKPhoto],
    ['/notover', 'И это ещё не конец', EndPhoto]
]

const HomePage = () => {
    return (
        <div id='homepage-container' 
        style={{backgroundImage: `url(${SPBPhoto})`, backgroundSize: 'cover'}}>
            <div className='filter'>
                <div className='header-container'>
                    <div>
                        <h1 className='homeheader'>Наш с тобой сайт</h1>
                        <p class='subtext'>Сделан лучшими динозавриками этого города</p>
                    </div>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <img src={Dinosaur} alt='Ну типа динозаврик' className='dinosaur' style={{transform: 'scaleX(-1)'}}/>
                        <img src={Dinosaur} alt='Ну типа динозаврик' className='dinosaur'/>
                    </div>
                </div>
                <div className='links'>
                    {memories.slice(0, 9).map((x, index) => (
                        <div className='point'>
                            <img style={{width: '100%'}} src={x[2]}/>
                            <Link to={x[0]}><p className="link" onMouseOver={
                                () => document.getElementById('homepage-container').style.backgroundImage = `url(${x[2]})`
                                }>{x[1]}</p>
                            </Link> 
                        </div>
                    ))}
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    {memories.slice(-2).map((x, index) => (
                        <div className='point'>
                            <img style={{width: '100%'}} src={x[2]}/>
                            <Link to={x[0]}><p className="link" onMouseOver={
                                () => document.getElementById('homepage-container').style.backgroundImage = `url(${x[2]})`
                                }>{x[1]}</p>
                            </Link> 
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default HomePage