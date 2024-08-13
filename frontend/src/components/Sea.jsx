import React from 'react';
import '../Sea.css';

const Sea = () => {
    return (
        <div className="sea-sea-container">
            <h1>Мне всегда нравилась твоя любовь к морю и к Владивостоку.</h1>
            <div className="sea-content">
                <div className="sea-left-block">
                    <p>
                        Когда, ещё до отношений, мы гуляли около Кремля, ты рассказывала мне про море, про то, как добывать разных существ. Как нырять и искать их и какие они на вкус.
                        Это было для меня так ново и интересно, что я запомнил тот рассказ до сих пор (а ты знаешь, какая у меня память)
                    </p>
                    <div className="sea-images">
                        <img src={require('../assets/sea1.jpg')} alt="Sea 1" />
                        <img src={require('../assets/sea3.jpg')} alt="Sea 3" />
                    </div>
                </div>
                <div className="sea-right-block">
                    <div className="sea-images">
                        <img src={require('../assets/sea4.jpg')} alt="Sea 1" />
                        <img src={require('../assets/sea5.jpg')} alt="Sea 3" />
                    </div>
                    <p>
                        Я очень рад, что ты показываешь мне этот мир, о котором я почти ничего не знал. То, как у тебя горят глаза при рассказа о море и Владике - заставляет восхищаться.
                        Мы обязательно съездим с тобой туда и ты познакомишь меня со своим миром.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sea;
