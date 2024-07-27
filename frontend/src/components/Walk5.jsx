import React from 'react';
import '../Begin.css';

const Walk5 = () => {
    return (
        <div className="walk5-container" style={{ 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'center', backgroundColor: 'bisque' 
        }}>
            <div className="content-container" style={{ 
                display: 'flex', flexDirection: 'column', 
                alignItems: 'center', width: '40%',
                margin: '10px', backgroundColor: 'rgb(255,255,255, 0.5)',
                borderRadius: '20px', padding: '10px'
            }}>
                <div className="images-row" style={{ 
                    display: 'flex', justifyContent: 'space-between', 
                    width: '100%' 
                }}>
                    <img src={require('../assets/walk16.jpg')} alt="Walk 16" style={{ width: '49%', height: 'auto', borderRadius: '20px' }} />
                    <img src={require('../assets/walk17.jpg')} alt="Walk 17" style={{ width: '49%', height: 'auto', borderRadius: '20px' }} />
                </div>
                <div className="image-full" style={{ width: '100%', marginTop: '10px' }}>
                    <img src={require('../assets/walk18.jpg')} alt="Walk 18" style={{ width: '100%', height: 'auto', borderRadius: '20px' }} />
                </div>
            </div>
            <div className="media-container" style={{ 
                display: 'flex', flexDirection: 'column', 
                alignItems: 'center', width: '40%', 
                margin: '10px', backgroundColor: 'rgb(255,255,255, 0.5)',
                borderRadius: '20px', padding: '10px' }}>
                <div className="image-video-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 'auto' }}>
                    <img src={require('../assets/walk19.jpg')} alt="Walk 19" style={{ width: '49%', height: 'auto', borderRadius: '20px' }} />
                    <video src={require('../assets/walk19.mp4')} controls style={{ width: '49%', height: 'auto', borderRadius: '20px' }} />
                </div>
            </div>
        </div>
    );
};

export default Walk5;
