import React from 'react';
import '../Final.css'; // Импортируем стили

const Final = () => {
    return (
        <div className="final__container">
            <h1 className="final__header">Не конец</h1>
            <div className="final__content">
                <div className="final__text-container">
                    <p className="final__text">
                        Мы очень многое с тобой пережили. У нас бывают трудности, ссоры, даже очень сильные, но я знаю, что мы все это победим. У нас с тобой все будет просто замечательно, и домик в Италии тоже будет. Потому что мы любим друг друга и доверяем друг другу, это самое главное. Я никогда в жизни не жалел, что все сложилось так. Ты моё сокровище, моё самое лучшее решение. Поэтому для этого сайта это не конец, а только самое самое начало. Как и для нас с тобой. Ведь фоточек будет ещё очень много.
                    </p>
                </div>
                <div className="final__image-container">
                    <img src={require("../assets/poems1.jpg")} alt="Поэзия" className="final__image"/>
                    <div style={{
                        fontWeight: 'bold',
                        position: 'absolute',
                        bottom: '15px',
                        right: '5px',
                        backgroundColor:  'rgba(140, 100, 60, 0.7)',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '10px',
                        fontSize: '16px'
                    }}>
                        Мне очень нравится эта фотография
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Final;
