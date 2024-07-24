// src/components/Begin.js
import React from 'react';
import '../Begin.css'; // Подключаем CSS файл для стилизации
import '../header.css';
import Fourteenth from "./14th";

const Fourteenth2 = () => {
    return (
        <div className="block" >
            <div className="content">
                <div className="text-image-container">
                    <img src={require('../assets/14th2.jpg')} alt="Vertical" className="block__image"/>
                    <div className="block__text block__horizontal__text">
                        <p>
                            А вечером рядом с домом ты подарила мне карты, которые я до сих пор храню и смотрю,
                            когда у меня душевное настроение или наоборот, когда мне грустно и тревожно.
                            Я сначала не понял, что это такое, а дома, когда посмотрел, был очень очень рад.
                            И смотрел по одной-двум в день, хотя очень хотелось все сразу. Ещё ты подарила мне браслет,
                            который со мной уже чуть ли не полгода и я его ни разу не снимал. Это ты держишь меня за руку.
                        </p>
                    </div>
                </div>
                <div className="text-image-container">
                    <div className="block__text block__horizontal__text">
                        <p>
                            А я подарил тебе картинку, очень очень важную для меня. Я всегда рисовал такие картинки:
                            и сейчас рисую, и год назад, и два, и три (где-то тогда я её придумал).
                            Но по ней никогда нельзя было понять, что за люди сидят на берегу. Тебе я подарил другую.
                            Я уж постарался, чтобы перепутать нас с тобой было нельзя.
                        </p>
                    </div>
                    <img src={require('../assets/14th6.jpg')} alt="Vertical"
                         className="block__image block__vertical__photo"/>
                </div>
            </div>
        </div>
    );
};

export default Fourteenth2;
