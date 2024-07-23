// Timeline.js
import React from 'react';
import '../Timeline.css';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const events = [
    {
        date: '2 Марта',
        description: 'Первая такая фоточка, которая у меня есть',
        image: home1,
    },
    {
        date: '29 Марта',
        description: 'Ночь перед тем, как я уехал на PROD',
        image: home2,
    },
    {
        date: '19 Апреля',
        description: 'Эта фоточка лежала у меня в избранном, но я не помнил, что там вообще было. Провел небольшое расслежование: это мы с тобой готовим ужин после школы, когда у тебя все уехали.',
        image: home3,
    },
    {
        date: '16 Июня',
        description: 'Утро перед поездом в Санкт-Петербург',
        image: home4,
    },
];

const Timeline = () => {
    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="events-container">
                {events.map((event, index) => (
                    <div key={index} className={`timeline-event ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                        <div className="event-content">
                            <span className="event-date">{event.date}</span>
                            <p className="event-description">{event.description}</p>
                            <img src={event.image} alt={event.description} className="event-image" />
                        </div>
                        <div className="event-dot"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
