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
                    <img src={require('../assets/before_dating.jpg')} alt="Vertical" className="block__image"/>
                    <div className="block__text block__horizontal__text">
                        <p>
                            В Мурманске вообще было много всего: как мы остались втроём с ТЮ и дрались на перчатках
                            (кажется, я там подгадывал, чтобы мы поехали с тобой именно), как мы брали на двоих еду в
                            ресторане, как кидались снежками.
                        </p>
                    </div>
                </div>
                <div className="text-image-container">
                    <div className="block__text block__horizontal__text">
                        <p>
                            В Мурманске, вообще не знал, как ты ко мне относишься, но там уже было все. Когда покупал
                            тебе карту Беларуси, говорил Гоше, кажется, "Даже если она откажется, почему я не могу подарить
                            красивое украшение красивой девушке".
                        </p>
                    </div>
                    <VideoPlayer />
                </div>
            </div>
        </div>
    );
};

export default Begin2;
