import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import { parseCookies } from './parseCookies';

export async function getInitialProps ({ req })  {
    const cookies =  parseCookies(req);
    const data =  cookies.useCache

    return {
        props: {
            initialCount: data,
        }
    }
}


const Player = ({ serie, initialCount }) => {
    const [Count, setCount] = useState(initialCount || 1);

    useEffect(() => {
        Cookie.set("useCache", Count, { expires: 7 });
        
    }, [Count])

    const [SaisonCount, setSaisonCount] = useState('1');
    const [Active, setActive] = useState('1');
    const [Change, setChange] = useState(2);

    function isActivated(id) {
        const selected = Active === id;
        return selected ? 'active' : '';
    }

    function isSaison(id) {
        const selected = SaisonCount === id;
        return selected ? 'active' : ''; 
    }

    function isChange() {
        const selection = Change === 1;
        return selection ? 'active' : '';
    }

    return (
        <div>
                <div className="section-vilain">
                    <div className="section-vilain-items">
                        <h3 style={{textAlign:"center"}}><span className="item-strong">{serie.title} en VF</span></h3>
                        <h3>Saison :</h3>
                        <div className="option-saison">
                            <ul className="option-saison-menu">{serie.saisons.saison.map(({ title, id }) => (<li key={id} onClick={() => setSaisonCount(id)} className={`option-saison-item ${isSaison(id)}`}>{title}</li>))}</ul>
                        </div>
                        <h3>episodes :</h3>
                    </div>
                    <div className="pagination">
                        <ul className="pagination-episodes">
                            {serie.saisons.saison[SaisonCount - 1].episodes.map(({ title, id, url, urlCode }) => (<li key={id} className={`pagination-item ${isActivated(id)}`} onClick={() => {setCount(id), setActive(id)}}><span>{id}</span></li>))} 
                        </ul></div>
                    </div>
                <div className={`section-player ${isChange(1)}`}>
                    <iframe style={{width: "100%"}} src={`https://embed.mystream.to/${serie.saisons.saison[SaisonCount - 1].episodes[Count - 1].url}`} scrolling="no" frameBorder="0" width="700" height="420" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>    
            </div>
            <div className={`section-player-up ${isChange(2)}`}>
                <iframe style={{width: '100%'}} src={`https://upstream.to/embed-${serie.saisons.saison[SaisonCount - 1].episodes[Count - 1].urlCode}.html`} scrolling="no" frameBorder="0" width="700" height="420" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
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

export default Player;
