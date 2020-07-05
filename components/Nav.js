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

                    <Link href="/"><a className="navbar-brand" style={{ textAlign: 'center', marginRight:'0', fontSize:'0'}}><span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.84 98.21" width='90'  fill='#fff' ><title>droppy</title><path d="M243.9,51.86l-.63,1c-2.59,4.39-8.8,11.91-11.4,14.89,0-7.47,2.52-28,2.24-33.51-10.86-3.24-6.94,11.15-8.24,16.52C221.19,63.85,216.1,72,211.48,68.7A6,6,0,0,1,209.21,65C206.46,52,219,31.87,210.84,33.81A6.31,6.31,0,0,0,206.4,38a115.53,115.53,0,0,0-3.74,14.68l-.1.18c-4.13,7-8.25,11.28-12.11,13.91,14.86-25.52-6.15-45.51-19.93-23.73,1.65-8.11-.6-10.17-3.45-9a6.25,6.25,0,0,0-3.55,5.64c-.06,2.09-.2,5.73-.62,12.78l-.23.4c-4.13,7-8.25,11.28-12.11,13.91,14.86-25.52-6.15-45.51-19.93-23.73,1.65-8.11-.6-10.17-3.45-9a6.25,6.25,0,0,0-3.55,5.64c-.06,2.09-.19,5.72-.62,12.72l-.28.46a13.56,13.56,0,0,1-8.23,6.2c4.68-14.78-3.76-28.41-13.8-23.93-12.18,7.19-3.73,26,6.47,27-1.9,6.67-6.61,10.66-11.49,8.77-12.55-6.41-4.58-33.08,1.51-35.86,1.81-7.24-15.8,6.79-15.25,17.76l0,0C65.17,81.1,63,66.23,70.74,47.42c8.78-20.59.24-11.94-11.62-11-2.32-15.18-18.24,2.81-3.36,5.32a40.28,40.28,0,0,1-4.23,10.15l-.05.09-.58.94C38.18,74.38,34,76.11,36.2,44.49c7-16.75,17-43.17,8.78-43.57-8.39-.66-13.87,13-15.75,37.86C17.94,24.91.74,42.39.14,57.23c-1.27,23.21,19,20.51,28.34,1.57.46,24.68,12.9,17.06,24.43-4.4v0l0,0,.52-.93.06-.09h0A48.88,48.88,0,0,0,58.36,41.9a18.22,18.22,0,0,0,7.83-3.1c1.76-1.26,4.24-3.53,5.46-2.71a1.29,1.29,0,0,1,.29.3c1.38,2-9.52,11.58-11.9,23.67-.83,4.23-1,11.14,1.79,13.08C66.22,76.2,75.3,70.6,81.89,57.78c1.61,19.64,24.32,21.43,31.43,4.48a16.44,16.44,0,0,0,9.4-5.14c-.34,6.28-2.36,38.54-3.16,40.25,11.07,9.49,8.11-22.86,9.41-28.08,9.34,10.58,25.06,1.53,33.6-11.57-.33,6.2-2.34,38.06-3.12,39.65,11.1,9.47,8.09-22.86,9.41-28.08,9,10.31,24.42,1.94,32.9-10.54-2.6,22.41,17.93,17.79,23.81,0l-.93,14.79c-26,25.68-3.11,31,3.45,20,3.5-5.34,3-17.39,3.54-21.93a139.53,139.53,0,0,0,12.75-15.76A3,3,0,0,0,243.9,51.86ZM37,31.89c.94-15,2.53-28,5.76-28,1,0,1.73,1,1.55,4-.57,9-2.51,16.21-7.65,29.39ZM14.75,68.37c-4.51,0-6.51-6.5-6.06-13.67C9.24,46,13.43,36.39,21,36.39c3.59,0,6.76,2.58,8,6.78-.25,4-.37,7.62-.47,10.7C23.11,64.36,19.16,68.37,14.75,68.37ZM53.56,34.29a1.13,1.13,0,0,1,1.14-1c1.12,0,1.7,1.37,1.59,3.17C55.32,36.48,53.46,35.8,53.56,34.29Zm54.31,25C102.26,58,97.77,52.69,98.26,45c.27-4.3,2.32-6.79,4.63-6.79,3.49,0,6.35,5.91,5.76,15.19A36.42,36.42,0,0,1,107.87,59.29Zm30.25,11.27c-4.92,0-8.84-4.49-8.39-11.57l.35-5.61c.43-6.79,5.06-15.19,10.85-15.19,5.64,0,7.66,6.2,7.13,14.6C147.29,65,143.92,70.56,138.12,70.56Zm39.89,0c-4.92,0-8.84-4.49-8.39-11.57l.35-5.61c.43-6.79,5.06-15.19,10.85-15.19s7.66,6.2,7.13,14.6C187.18,65,183.81,70.56,178,70.56Zm45.91,14.31c-.63,10-3.21,11-5.41,11s-3.22-1.81-3.09-3.81c.27-4.3,4-9.13,9-14.6Z" transform="translate(-0.08 -0.9)"/></svg> </span></a></Link>
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
