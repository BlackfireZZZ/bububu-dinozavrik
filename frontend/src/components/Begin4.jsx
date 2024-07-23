// src/components/Begin.js
import React from 'react';
import '../Begin.css'; // Подключаем CSS файл для стилизации
import '../header.css';
import VideoPlayer from "./VideoPlayer";


const Begin2 = ({ backgroundColor }) => {
    return (
        <div className="block" style={{ backgroundColor }}>
            <div className="header">
                <h1 className="header_text">Самое самое начало</h1>
            </div>
            <div className="content">
                <div className="text-image-container">
                    <div className="block__text block__horizontal__text">
                        <p>
                            Ты помнишь, сколько мы гуляли перед тем, как начать встречаться?
                            Как мы разговаривали о том, что для нас важно, философствовали.
                            Я всегда говорил и продолжаю говорить, что те разговоры - то, что сделало наши отношения такими крепкими.
                            И я очень благодарен тебе за них.
                        </p>
                    </div>
                    <VideoPlayer/>
                </div>
                <div className="text-image-container">
                    <img src={require('../assets/before_dating.jpg')} alt="Vertical" className="block__image"/>
                    <div className="block__text block__horizontal__text">
                        <p>
                            А вот тут мы гуляли вокруг Кремля. Я завёл тебя в хитрюжное место "посмотреть на воду".
                            А потом и на Красную площадь. Потом я начертил наш маршрут и вот, нашёл его сейчас.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Begin2;
