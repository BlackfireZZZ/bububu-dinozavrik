// src/components/Begin.jsx
import React from 'react';
import '../Begin.css'; // Подключаем CSS файл для стилизации
import '../header.css';

const Begin = ({ backgroundColor }) => {
    return (
        <div className="block" style={{ backgroundColor }}>
            <div className="header">
                <h1 className="header_text">Самое самое начало</h1>
            </div>
            <div className="content">
                <div className="text-image-container">
                    <div className="block__text block__horizontal__text">
                        <p>
                            Я помню, как и тебя, и меня оговаривали от отношений. Ваня говорил мне: "Только не вздумай влюбляться",
                            про то, что ты юз энд лив.
                        </p>
                    </div>
                    <img src={require('../assets/murmansk1.jpg')} alt="Vertical" className="block__image block__vertical__photo" />
                </div>
                <div className="text-image-container reversed">
                    <img src={require('../assets/murmansk4.png')} alt="Horizontal" className="block__image block__horizontal__photo" />
                    <div className="block__text block__vertical__text">
                        <p>
                            А я влюбился в тебя. Потому что ты такая весёлая, яркая, из того времени я
                            вспоминаю тебя только с улыбкой до ушей, танцующей что-нибудь, поющей. Но при всём при этом ты была
                            такой недоступной, немного загадочной. Тут нельзя было не влюбиться, конечно.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Begin;
