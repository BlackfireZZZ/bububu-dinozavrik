import React from 'react';
import '../Begin.css';
import '../Walk2.css';
import walk6 from '../assets/walk6.jpg'; // импорт изображения


const Walk2 = () => {
    return (
        <div className="walk2-container">
            <div className="left-column2">
                <div className="block__text2" style={{fontSize: '14px'}}>
                    <p>Люблю наш самый частый маршрут от Новой Третьяковки по набережной
                        (где надо посмотреть картины и поиграть эту игру) к Петру Первому,
                        дальше к памятнику детям жертвам войны, к Кремлю, Зарядье или уютный домик,
                        в котором стоит купить квартиру, на мост напротив высотки, в клуб Франклин
                        (куда мы ещё точно точно придём, даже не сопротивляйся) и наверх к метро.</p>
                </div>
                <div className="image-container2">
                    <img src={walk6} alt="Walk" className="main-image2" />
                    <div className="caption">Фонтанчики</div>
                </div>
            </div>
            <div className="right-column2">
                <div className="top-image-container2">
                    <img src={require("../assets/walk3.jpg")} alt="Big" className="big-image2" />
                    <div className="caption">Закатик</div>
                </div>
                <div className="small-images-container2">
                    <img src={require("../assets/walk4.jpg")} alt="Small1" className="small-image2" />
                    <img src={require("../assets/walk5.jpg")} alt="Small2" className="small-image2" />
                </div>
            </div>
        </div>
    );
};

export default Walk2;
