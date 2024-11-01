import React from 'react';
import '../Begin.css'; // Подключаем CSS файл для стилизации
import '../header.css';
import '../Family.css'

const Family = () => {
    return (
        <div className="block" style={{backgroundColor: '#ffbf6c'}}>
            <div className="family-container">
                <div className="header">
                    <h1 className="header_text">Семья</h1>
                </div>
                <div className="content">
                    <div className="text-image-container">
                        <img src={require('../assets/family1.jpg')} alt="Vertical" className="block__image"/>
                        <div className="block__text block__horizontal__text">
                            <p>
                                Мне очень нравится, что ты общаешься с моей семьей.
                                Потому что это продолжение того <b>чувства семьи</b>, которое есть у нас,
                                когда мы с тобой дома, но немного другое продолжение.
                                Мне кажется, что это что-то очень светлое и я очень очень рад,
                                что ты ходишь к нам, нянчишься с детишками, участвуешь в квестах.
                                Тебя уже полюбили все мои родные, бабушка тебе привет передаёт,
                                мама с папой зовут к нам. Даже Мишка, хоть он и стесняется,
                                но ты вспомни, как мы с тобой и с ним втроём веселились.
                            </p>
                        </div>
                    </div>
                    <div className="text-image-container">
                        <div className="block__text block__horizontal__text">
                            <p>
                                Мне нравится это потому что я хочу показать тебе, какой, мне кажется,
                                должна быть семья и она такая тебе как будто тоже очень нравится.
                                Понятно, что не бывает все только так радостно, но это то, почему я считаю,
                                что семья и дети - <b>большое счастье</b>.

                            </p>
                        </div>
                        <img src={require('../assets/family2.jpg')} alt="Vertical"
                             className="block__image block__vertical__photo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Family