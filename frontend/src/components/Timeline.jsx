// Timeline.js
import React from 'react';
import '../Timeline.css';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const events = [
    {
        date: '2022-01-01',
        description: 'New Year Celebration',
        image: home1,
    },
    {
        date: '2022-03-01',
        description: 'Spring Festival',
        image: home2,
    },
    {
        date: '2022-06-01',
        description: 'Summer Vacation',
        image: home3,
    },
    {
        date: '2022-12-01',
        description: 'Winter Wonderland',
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
