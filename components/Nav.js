import React, { useState, useContext } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { QueryContext } from './FilmesContext';


const Nav = (props) => {
    const [Show, setShow] = useState(false);
    const [Active, setActive] = useState(false);
    const [Hover, setHover] = useState(false);

    const Data = useContext(QueryContext);


    return (
        <>
            
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span onClick={() => setActive(!Active)} className="icon-search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.8 20.8" width='25' height='25' onMouseEnter={()=> setHover(!Hover)} onMouseLeave={()=>setHover(!Hover)} fill={Hover ? '#fff' : '#b2b2b2'}><title>search-icon</title><path d="M14.42,13A8,8,0,1,0,13,14.42l6.48,6.48.26,0a1.32,1.32,0,0,0,.46-.2,1.42,1.42,0,0,0,.63-.9l.06-.27ZM8.1,2.1a6,6,0,1,1-6,6A6,6,0,0,1,8.1,2.1Z" transform="translate(-0.1 -0.1)"/></svg></span>
                    <div className={`section-search ${Active && 'active'}`}>
                        <SearchBar Data={Data} />
                        </div>

                    <Link href="/"><a className="navbar-brand" style={{ textAlign: 'center', marginRight: '0', fontSize: '0' }}><span><img src='/static/new-droppy.svg' alt='Droppy logo' style={{ width:'90px'}} /></span></a></Link>
                    <button className="navbar-toggler" onClick={() => setShow(!Show)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="Menu-nav" className={`collapse navbar-collapse ${Show && 'show'}`} style={{ flexGrow: '0', marginRight: '5em', fontWeight: '700', fontSize: '1.4em'}} id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ml-5 active">
                                <Link href="/"><a className="nav-a">Acceuil</a></Link>
                            </li>
                            <li className="nav-item ml-5">
                            <Link href="/filmes"><a className="nav-a">Filmes</a></Link>
                            </li>
                            <li className="nav-item ml-5">
                            <Link href="/series"><a className="nav-a">Séries</a></Link>
                            </li>
                            <li className="nav-item ml-5">
                            <Link href="/animes"><a className="nav-a">Animes</a></Link>
                            </li>
                            <li className="nav-item ml-5">
                            <Link href="/a-propos"><a className="nav-a">A propos</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
    </header>
            
                {props.children}
</>

    )
}

export default Nav;
