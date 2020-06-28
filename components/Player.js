import React,{useState,useEffect} from 'react';


const Player = ({serie}) => {
    const [Count, setCount] = useState(1);
    const [Active, setActive] = useState(false);

    return (
        <div>
                <div className="section-info">
                    <div className="section-one">
                        <h3>Serie : {serie.title} en VF </h3>
                        <h3>Saison : {serie.saisons.saison.title} </h3>
                        <h3>episodes :</h3>
                    </div>
                    <div className="pagination">
                        <ul className="pagination-episodes">
                            {serie.saisons.saison.episodes.map(({ title, id, url }) => (<li key={id} className="pagination-item" onClick={() => {setCount(id), setActive(!Active)}}><span className={`${!Active ? 'active' : ''}`} >{id}</span></li>))} 
                        </ul></div>
                    </div>
                <div className="section-vid">
                    <iframe style={{width: "100%"}} src={`https://embed.mystream.to/${serie.saisons.saison.episodes[Count - 1].url}`} scrolling="no" frameBorder="0" width="700" height="420" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>    
                </div>
        </div>
        
    )
}

export default Player;
