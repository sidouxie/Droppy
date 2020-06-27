import React,{useState,useEffect} from 'react';



const Player = props => {
    const [Active, setActive] = useState('jak aissa');
    useEffect(() => {

    },[])

    return (
        <div>
            <h1 onClick={() => setActive(Active)}>Data est : Bonjours {Active} </h1>
            {props.children}
        </div>
    )
}

export default Player;
