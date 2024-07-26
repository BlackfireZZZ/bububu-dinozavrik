import React from 'react';
import '../Begin.css';

const Walk4 = () => {
    return (
        <div className="walk4-container" style={{ display: 'flex' }}>
            <div className="image-container" style={{ flex: '1' }}>
                <img src={require('../assets/walk12.jpg')} alt="Walk 12" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="content-container" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="block__text">
                    <p>Я люблю фотографировать тебя и фотографироваться с тобой. Ты очень очень очень красивая.
                        Это говорю я, это говорят самые жестокие критики: Никонов Иннокентий и Давитадзе Георгий,
                        моя мама, папа, все все все. Если бы ты разрешала себя побольше фотографировать,
                        то у меня было бы миллионов фоточек, чтобы сюда вставить, вот и думай, дурында.</p>
                </div>
                <div className="images-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <img src={require('../assets/walk13.jpg')} alt="Walk 13" style={{ width: '49%', height: 'auto' }} />
                    <img src={require('../assets/walk14.jpg')} alt="Walk 14" style={{ width: '49%', height: 'auto' }} />
                </div>
                <div className="image-full" style={{ width: '100%', marginTop: '10px' }}>
                    <img src={require('../assets/walk15.jpg')} alt="Walk 15" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
};

export default Walk4;
