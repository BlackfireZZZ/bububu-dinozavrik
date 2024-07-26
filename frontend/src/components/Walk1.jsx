// src/components/Begin.js
import React from 'react';
import '../Begin.css'; // Подключаем CSS файл для стилизации
import '../header.css';
import '../Walk2.css'

const Walk1 = ({ backgroundColor }) => {
    return (
        <div className="walk1-container" style={{ backgroundColor }}>
            <div className="header">
                <h1 className="header_text">Самое самое начало</h1>
            </div>
            <div className="content">
                <div className="text-image-container">
                    <div className="block__text block__horizontal__text">
                        <p>
                            Я люблю наши прогулки. Люблю показывать тебе свои любимые места Москвы,
                            люблю исследовать Москву с тобой.
                            Рассказывать тебе про здания и истории, слушать тебя.
                        </p>
                    </div>
                    <img src={require('../assets/walk1.jpg')} alt="Vertical" className="block__image"/>
                </div>
                <div className="text-image-container">
                    <img src={require('../assets/walk2.jpg')} alt="Vertical"
                         className="block__image block__vertical__photo"/>
                    <div className="block__text block__horizontal__text">
                        <p>
                            Мне нравится, что мы по-разному воспринимаем многие вещи,
                            как иногда мы идём в те места, в которые без тебя я бы скорее не пошёл
                            (например там, где людно) и я вижу новую красоту.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Walk1;
