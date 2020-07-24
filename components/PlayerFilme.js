import React, { useState } from 'react';
import AdBlockDetect from 'react-ad-block-detect';
import PropTypes from 'prop-types';

const PlayerFilme = ({filme}) => {
    
    const [Change, setChange] = useState(2);

    function isChange() {
        const selection = Change === 1;
        return selection ? 'active' : '';
    }

    return (
        <div>
                <div className="section-vilain">
                    <div className="section-vilain-items">
                        <h3 style={{textAlign:'center'}}><span className="item-strong">{filme.title} en VF </span></h3>
                    </div>
            </div>
            
            <AdBlockDetect>
                <div className="adblock-wrapper">
                    <div className="detect-adblock"><span>⛔ s'il vous plaît veuillez désactiver votre Adblock pour lire le filme</span></div>
                </div>
            </AdBlockDetect>

            <div className={`section-player ${isChange(1)}`}>
                <iframe style={{width: "100%"}} src={`https://embed.mystream.to/${filme.apiurl}`} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" width="700" height="340" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>    
            </div>

            <div className={`section-player-up ${isChange(2)}`}>
                <iframe style={{width: '100%'}} src={`https://upstream.to/embed-${filme.urlCode}.html`} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" width="700" height="340" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </div>
        
            <div className="change-player">
                <h3>Choix de Platforme : </h3>
                <ul className="change-player-menu">
                    <li className={`change-player-item ${isChange()}`} onClick={() => setChange(1)}><span style={{color:'#f7db61'}}>My</span>stream</li>
                    <li className={`change-player-item-up ${isChange()}`} onClick={() => setChange(2)}><span style={{color:'#02b9c0'}}>Up</span>stream</li>
                </ul>
            </div>
        </div>
    )
}

export default PlayerFilme;
