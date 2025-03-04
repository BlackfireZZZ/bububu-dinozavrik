import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../HomePage.css'
import BegginingPhoto from '../assets/murmansk7.jpg'
import NewYearPhoto from '../assets/NewYear.jpg'
import ValentinePhoto from '../assets/14th2.jpg'
import WalkPhoto from '../assets/walk3.jpg'
import HomePhoto from '../assets/home4.2.jpg'
import DifferencePhoto from '../assets/HomePicture1.jpg'
import ShipPhoto from '../assets/Ship7.jpg'
import SeaPhoto from '../assets/sea5.jpg'
import SPBPhoto from '../assets/SPB1.jpg'
import IDKPhoto from '../assets/Martin.jpg'
import FamilyPhoto from '../assets/family.jpg'
import EndPhoto from '../assets/endphoto.jpg'
import Dinosaur from '../assets/icons/dino.png'

//link, title, photo
const memories = [
    ['/beginning', '1. Самое самое начало', BegginingPhoto],
    ['/newyear', '2. Новый год', NewYearPhoto],
    ['/14th', '3. 14 февраля', ValentinePhoto],
    ['/circles', '4. Твои кружки', IDKPhoto],
    ['/timeline', '5. Дом', HomePhoto],
    ['/ourwalks', '6. Наши прогулки', WalkPhoto],
    ['/diff', '7. Ты разная', DifferencePhoto],
    ['/sea', '8. Про море', SeaPhoto],
    ['/ship', '9. Кораблик', ShipPhoto],
    ['/family', '10. Семья', FamilyPhoto],
    ['/poems', '11. Стихи и цветы', SPBPhoto],
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
                    {memories.slice(0, 12).map((x, index) => (
                        <div className='point'>
                            <img style={{width: '100%'}} src={x[2]}/>
                            <Link to={x[0]}><p className="link" onMouseOver={
                                () => document.getElementById('homepage-container').style.backgroundImage = `url(${x[2]})`
                                }>{x[1]}</p>
                            </Link> 
                        </div>
                    ))}
                    {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
                    {/*{memories.slice(-2).map((x, index) => (*/}
                    {/*    <div className='point'>*/}
                    {/*        <img style={{width: '100%'}} src={x[2]}/>*/}
                    {/*        <Link to={x[0]}><p className="link" onMouseOver={*/}
                    {/*            () => document.getElementById('homepage-container').style.backgroundImage = `url(${x[2]})`*/}
                    {/*            }>{x[1]}</p>*/}
                    {/*        </Link> */}
                    {/*    </div>*/}
                    {/*))}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>    
    )
}
export default HomePage