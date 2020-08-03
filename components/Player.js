import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import AdBlockDetect from 'react-ad-block-detect';
import PropTypes from 'prop-types';


//rajout des filmes

export async function getServerSideProps({ ctx }) {
    const cookies = parseCookies(ctx)

    return {
        cookies
    }
}



const Player = ({ serie, cookies }) => {
    const [Count, setCount] = useState(1);
    const [Slugy] = useState(serie.slug);
    const [Kooky, setKooky] = useState([parseCookies(cookies)]);
    if (Kooky === undefined) {
        setKooky(['1']);
    }
    function handleSaison(id) {
        // Simply omit context parameter.
            // Parse        
            const cookies = parseCookies()
            console.log(cookies);

            // Set
            setCookie(id, 'fromSaison', id, {
                maxAge: 30 * 24 * 60 * 60,
                path: `/series/${Slugy}`,
                sameSite: "lax",
            })
        
        return cookies
    }

    function handleKooky(id) {
            // Simply omit context parameter.
            // Parse
            const cookies = parseCookies()

            // Set
            setCookie(id, 'fromClient', id, {
                maxAge: 30 * 24 * 60 * 60,
                path: `/series/${Slugy}`,
                sameSite: "lax",
            })
        
        return cookies
    }

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
                            <ul className="option-saison-menu">{serie.saisons.saison.map(({ title, id }) => (<li key={id} onClick={() => {setSaisonCount(id), handleSaison(id)}} className={`option-saison-item ${isSaison(id)}`}>{title}</li>))}</ul>
                        </div>
                        <h3>episodes :</h3>
                    </div>
                    <div className="pagination">
                        <ul className="pagination-episodes">
                            {serie.saisons.saison[SaisonCount - 1].episodes.map(({ title, id, url, urlCode }) => (<li key={id} className={`pagination-item ${isActivated(id)}`} onClick={() => {setCount(id), setActive(id), handleKooky(id)}}><span>{id}</span></li>))} 
                        </ul>
                    </div>
                    </div>
            
            <div className="alert alert-info resume-info">
                <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" className="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
                    <circle cx="8" cy="4.5" r="1"/>
                </svg> Votre dernier épisode visionné : <span className="alert-link"> Saison {parseInt(Kooky[0].fromSaison)} Épisode {parseInt(Kooky[0].fromClient)} 👀</span> ( Veuillez actualiser le site pour afficher ! )</div>
            
            <AdBlockDetect>
                <div className="adblock-wrapper">
                    <div className="detect-adblock"><span>⛔ s'il vous plaît veuillez désactiver votre Adblock pour lire l'épisode</span></div>
                </div>
            </AdBlockDetect>

            <div className={`section-player ${isChange(1)}`}>
                    <iframe style={{width: "100%"}} src={`https://embed.mystream.to/${serie.saisons.saison[SaisonCount - 1].episodes[ Count - 1].url}`} scrolling="no" frameBorder="0" width="700" height="340" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>    
            </div>
            <div className={`section-player-up ${isChange(2)}`}>
                <iframe style={{width: '100%'}} src={`https://upstream.to/embed-${serie.saisons.saison[SaisonCount - 1].episodes[ Count - 1].urlCode}.html`} scrolling="no" frameBorder="0" width="700" height="340" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </div>

            <div className="change-player">
                <h3>Choix de Platforme :</h3>
                <ul className="change-player-menu">
                    <li className={`change-player-item ${isChange()}`} onClick={() => setChange(1)}><span style={{color:'#f7db61'}}>My</span>stream</li>
                    <li className={`change-player-item-up ${isChange()}`} onClick={() => setChange(2)}><span style={{color:'#02b9c0'}}>Up</span>stream</li>
                </ul>
            </div>
        </div>
    )
}

export default Player;

Player.propTypes = {
    cookies: PropTypes.array.isRequired,
    serie: PropTypes.object.isRequired,
}