import React,{useState} from 'react';


const PlayerFilme = ({filme}) => {
    
    const [Change, setChange] = useState(2);

    function isChange() {
        const selection = Change === 1;
        return selection ? 'active' : '';
    }

    return (
        <div>
                <div className="section-info">
                    <div className="section-one">
                        <h3>Filme: {filme.title} en VF </h3>
                    </div>
                    </div>
                <div className={`section-player ${isChange(1)}`}>
                    <iframe style={{width: "100%"}} src={`https://embed.mystream.to/${filme.apiurl}`} scrolling="no" frameBorder="0" width="700" height="300" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>    
            </div>
            <div className={`section-player-up ${isChange(2)}`}>
                <iframe style={{width: '100%'}} src={`https://upstream.to/embed-${filme.urlCode}.html`} scrolling="no" frameBorder="0" width="700" height="300" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
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
