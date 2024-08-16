import React from 'react';
import '../Begin.css';

const Walk4 = () => {
    return (
        <div className="walk4-container" 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#77dd77', minHeight: '100vh' }}>
            <div className="image-container walk4" style={{width: '30%'}}>
                <img src={require('../assets/walk12.jpg')} alt="Walk 12" className='img4' style={{width: '100%'}}/>
                <div className="caption">Гуляли по Поклонной Горе и смотрели на кадетиков.</div>
            </div>
            <div className="content-container walk4">
                <div className="block__text">
                    <p>Я люблю фотографировать тебя и фотографироваться с тобой. Ты очень очень очень красивая.
                        Это говорю я, это говорят самые жестокие критики: Никонов Иннокентий и Давитадзе Георгий,
                        моя мама, папа, все все все. Если бы ты разрешала себя побольше фотографировать,
                        то у меня было бы миллионов фоточек, чтобы сюда вставить, вот и думай, дурында.</p>
                </div>
                <div className="images-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <img src={require('../assets/walk13.jpg')} alt="Walk 13" className='img4' />
                    <img src={require('../assets/walk14.jpg')} alt="Walk 14" className='img4' />
                </div>
                <div className="image-full" style={{ width: '100%', marginTop: '10px' }}>
                    <img src={require('../assets/walk15.jpg')} alt="Walk 15" className='img4' style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default Walk4;
