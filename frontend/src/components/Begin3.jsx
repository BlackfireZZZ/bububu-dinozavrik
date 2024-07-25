// src/components/Begin.js
import React from 'react';
import '../Begin.css'; // Подключаем CSS файл для стилизации
import '../header.css';
import MusicPlayer from "./MusicPlayer";

const Begin3 = ({ backgroundColor }) => {
    return (
        <div className="block" style={{ backgroundColor }}>
            <div className="header">
                <h1 className="header_text">Самое самое начало</h1>
            </div>
            <div className="content">
                <div className="text-image-container reversed">
                    <MusicPlayer img_src={require('../assets/music/viva_la_vida.jpg')}
                                 song_src={require('../assets/music/viva_la_vida.mp3')}
                                 title={'Viva la vida'} artist={'Coldplay'} />
                    <MusicPlayer img_src={require('../assets/music/Snowman.jpg')}
                                 song_src={require('../assets/music/Snowman.mp3')}
                                 title={'Snowman'} artist={'Sia'} />
                    <div className="block__text block__vertical__text">
                        <p>
                            А потом началось самое хитрюжничество, когда ты через Васю рассказала мне, какие цветы тебе нравятся и я принёс их вместе с картой Беларуси. А ещё в отеле сделал хитрый вид, что я не понимаю, о каких цветах идёт речь и что вообще не я подарил.
                            И как ты потом свои намёки делала, про которые я всегда говорю, что это я тест на свинотство прошёл, потому что что это такое, если девушка отворачивается, нельзя её дальше целовать.
                            И как потом мне потом Вася объяснила все твои намёки.
                        </p>
                        <p>
                            Мне очень запомнилось, как ты в последнюю ночь обшикала меня моими духами и сказала, что они тебе нравятся.
                            А потом я пришёл к Васе с Данаей и они стали надо мной смеяться по-доброму и мы все радовались, что все так хорошо.
                        </p>
                    </div>
                </div>
                <img src={require('../assets/murmansk5.jpg')} alt="Vertical" style={{width: '50%', height: 'auto'}} className="block__image"/>
            </div>
        </div>
    );
};

export default Begin3;
