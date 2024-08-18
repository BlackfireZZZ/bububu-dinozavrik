import React from 'react';
import '../Begin.css';
import '../Walk3.css';

const Walk7 = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(42,119,87)', height: '100vh' }}>
            <div style={{ width: '25%', margin: '10px', padding: '10px', backgroundColor: 'rgb(255, 255, 255, 0.5)', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <img src={require("../assets/walk24.jpg")} style={{ width: '100%', borderRadius: '20px', marginBottom: '10px' }} alt="Small1" />
                    <div style={{ position: 'absolute', bottom: '15px', left: '5px', backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', padding: '10px', borderRadius: '10px', fontSize: '16px' }}>
                        Наша первая встреча после "Океана": мы ходили на выписку бебиков и теперь идём в кино
                    </div>
                </div>
                <img src={require("../assets/walk27.jpg")} style={{ width: '100%', borderRadius: '20px' }} alt="Small2" />
            </div>
            <div style={{ width: '25%', margin: '10px', padding: '10px', backgroundColor: 'rgb(255, 255, 255, 0.5)', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src={require("../assets/walk25.jpg")} style={{ width: '100%', borderRadius: '20px', marginBottom: '10px' }} alt="Small1" />
                <img src={require("../assets/walk26.jpg")} style={{ width: '100%', borderRadius: '20px' }} alt="Small2" />
            </div>
        </div>
    );
};

export default Walk7;
