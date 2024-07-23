// Timeline.js
import React from 'react';
import '../Timeline.css';
import ground from '../assets/icons/ground.png'
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home2_2 from '../assets/home2.2.jpg'
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const events = [
    {
        date: '2 Марта',
        description: 'Первая такая фоточка, которая у меня есть',
        image: [home1]
    },
    {
        date: '29 Марта',
        description: 'Ночь перед тем, как я уехал на PROD',
        image: [home2, home2_2]
    },
    {
        date: '19 Апреля',
        description: 'Эта фоточка лежала у меня в избранном, но я не помнил, что там вообще было. Провел небольшое расследование: это мы с тобой готовим ужин после школы, когда у тебя все уехали.',
        image: [home3]
    },
    {
        date: '16 Июня',
        description: 'Утро перед поездом в Санкт-Петербург',
        image: [home4]
    },
];

const Timeline = () => {
    return (
        <div>
            <div className='text-div'>
                <div className='main-home'>
                    <p style={{width: '50%', margin: '25% 0 0 20%'}}>
                        Я счастлив когда мы вдвоём дома. Очень люблю готовить с тобой еду (хоть ты и пошутишь про trad wife).
                        Люблю потом расставлять чашки, заваривать чай и есть с тобой нашу еду,
                        она вкусная и мы так сидим, а я щекочу тебя ногой. Люблю прятаться от камеры и хулиганить,
                        хотя лучше всё-таки без неё. Люблю смотреть с тобой фильмы, когда ты лежишь на мне и мы бубубушимся на глупых изменщиков и кринжуль.
                        Люблю наши ночи и безумно люблю засыпать рядом с тобой.
                    </p>
                </div>
                <div style={{display: 'inline-block', width: '40%'}}>
                    <p className='second-text'>
                        Я тебе уже говорил, это время даёт мне чувство семьи, это то, что у меня,
                        благодаря тебе, есть и то, что я хотел бы оставить на всю свою жизнь.
                        А последний раз, когда мы сидели на балконе, это было просто замечательно.
                        Я чувствовал себя героем какого-нибудь фильма, когда у влюбленных свидание и они сидят и смотрят вдаль,
                        перед ними самая вкусная на свете еда, пледик, они такие красивые.. Это вот мы.
                    </p>
                    <img src={ground} style={{height: '200px', width: 'auto', marginTop: '10%'}}/>
                </div>
                <div className='street-lamp'/>
            </div>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                <div className="events-container">
                    {events.map((event, index) => (
                        <div key={index} className={`timeline-event ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                            <div className="event-content">
                                <span className="event-date">{event.date}</span>
                                <p className="event-description">{event.description}</p>
                                {event.image.map((link, index) => (
                                    <img src={link} alt={event.description} className="event-image" />
                                ))}
                            </div>
                            <div className="event-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
