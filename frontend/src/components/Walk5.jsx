import React from 'react';
import '../Begin.css';

const Walk5 = () => {
    return (
        <div className="walk5-container" style={{ 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'center', backgroundColor: 'bisque' 
        }}>
            <div className="content-container walk5" style={{ }}>
                <div className="images-row" style={{ 
                    display: 'flex', justifyContent: 'space-between', 
                    width: '100%' 
                }}>
                    <img src={require('../assets/walk16.jpg')} alt="Walk 16" className='img5' />
                    <img src={require('../assets/walk17.jpg')} alt="Walk 17" className='img5' />
                </div>
                <div className="image-full" style={{ width: '100%', marginTop: '10px' }}>
                    <img src={require('../assets/walk18.jpg')} alt="Walk 18" style={{ width: '100%', height: 'auto', borderRadius: '20px' }} />
                </div>
            </div>
            <div className="media-container walk5" style={{ }}>
                <div className="image-video-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 'auto' }}>
                    <img src={require('../assets/walk19.jpg')} alt="Walk 19" className='img5' />
                    <video src={require('../assets/walk19.mp4')} controls className='img5' />
                </div>
            </div>
        </div>
    );
};

export default Walk5;
