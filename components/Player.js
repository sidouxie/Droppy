import React,{useState,useEffect} from 'react';


const Player = ({serie}) => {
    const [Count, setCount] = useState(1);
    const [SaisonCount, setSaisonCount] = useState(1);
    const [Active, setActive] = useState('1');

    function isActive(id) {
        const selected = Active === id;
        return selected ? 'active' : '';
    }

    function isSaison(id) {
        const selected = SaisonCount === id;
        return selected ? 'active' : '';
    }

    return (
        <div>
                <div className="section-info">
                    <div className="section-one">
                        <h3>Serie : {serie.title} en VF </h3>
                        <h3>Saison : {serie.saisons.saison.title} </h3>
                        <div className="option-saison">
                            <ul className="option-saison-menu">{serie.saisons.saison.map(({ title, id }) => (<li key={id} onClick={() => setSaisonCount(id)} className={`option-saison-item ${isSaison(id)}`}>{title}</li>))}</ul>
                        </div>
                        <h3>episodes :</h3>
                    </div>
                    <div className="pagination">
                        <ul className="pagination-episodes">
                            {serie.saisons.saison[SaisonCount - 1].episodes.map(({ title, id, url }) => (<li key={id} className={`pagination-item ${isActive(id)}`} onClick={() => {setCount(id), setActive(id)}}><span>{id}</span></li>))} 
                        </ul></div>
                    </div>
                <div className="section-vid">
                    <iframe style={{width: "100%"}} src={`https://embed.mystream.to/${serie.saisons.saison[SaisonCount - 1].episodes[Count - 1].url}`} scrolling="no" frameBorder="0" width="700" height="420" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>    
                </div>
        </div>
    )
}

export default Player;
