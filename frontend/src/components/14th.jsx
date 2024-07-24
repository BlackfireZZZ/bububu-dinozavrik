import React from 'react';
import RoundVideo from './RoundVideo';
import '../Begin.css';
import '../14th.css';

const Fourteenth = () => {
    return (
        <div className="fourteenth-container">
            <header className="fourteenth-header">
                <h1 className="fourteenth-title">14 Февраля</h1>
                <div className="fourteenth-note">
                    Это 14 февраля было первым в моей жизни, первый раз я его отмечал, готовился. И оно прошло так, как я представляю себе идеальное 14 февраля, как я хочу отметить его с тобой и в следующем году.
                </div>
            </header>
            <main className="fourteenth-main">
                <div className="fourteenth-column">
                    <div className="block__text">
                        <p>Мы пошли в Пушкинский музей, я рассказывал тебе про экспозицию. А мне очень нравится
                            рассказывать тебе что-то,
                            особенно, об искусстве. Там я купил брошку, которая тебе понравилась и которую я потом
                            закрепил на цветах 8 марта. </p>
                    </div>
                    <img src={require('../assets/14th3.jpg')} alt="Билеты в Пушкинский" className="block__image"/>
                    <div className="fourteenth-content-row">
                        <RoundVideo src={require('../assets/RoundVideos/14th.mp4')} label="Мы гуляем по Арбату"/>
                        <div className="block__text">
                            <p>Оттуда мы отправились в пиццерию напротив Храма Христа Спасителя, и там нам принесли
                                пиццу ввиде сердечка.
                                Гуляли с тобой по Арбату, потом в Новой Третьяковке посмотрели всю экспозицию. </p>
                        </div>
                    </div>
                </div>
                <div className="fourteenth-column">
                    <img src={require('../assets/14th4.jpg')} alt="Статуя императора" className="block__image"/>

                </div>
            </main>
        </div>
    );
};

export default Fourteenth;
