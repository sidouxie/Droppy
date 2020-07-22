import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { QueryContext } from './FilmesContext';
import { FaBars,FaTimes } from 'react-icons/fa';

function Menu(props) {

    const [Show, setShow] = useState(false);
    const [Active, setActive] = useState(false);
    const [Hover, setHover] = useState(false);

    const [Showed, setShowed] = useState(true);
    const [ScrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            isChanging();
        }
    }, [ScrollPos])

    const handleScroll = ()  => {
        setScrollPos(document.body.getBoundingClientRect().top)
        setShowed({isWeed : document.body.getBoundingClientRect().top > ScrollPos})
    }
    
    function isChanging() {
        const changing = Showed.isWeed;
        return changing ? 'active' : 'hidden';
    }

    const Data = useContext(QueryContext);

    return (
        <>
            <header className={`header-menu ${isChanging()}`}>
                <nav>
                    <div className="section-recherche">
                        <span onClick={() => setActive(!Active)} className="icon-search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.8 20.8" width='25' height='25' onMouseEnter={()=> setHover(!Hover)} onMouseLeave={()=>setHover(!Hover)} fill={Hover ? '#fff' : '#b2b2b2'}><title>search-icon</title><path d="M14.42,13A8,8,0,1,0,13,14.42l6.48,6.48.26,0a1.32,1.32,0,0,0,.46-.2,1.42,1.42,0,0,0,.63-.9l.06-.27ZM8.1,2.1a6,6,0,1,1-6,6A6,6,0,0,1,8.1,2.1Z" transform="translate(-0.1 -0.1)"/></svg></span>
                            <div className={`section-search ${Active && 'active'}`}>
                                <SearchBar Data={Data} />
                            </div>
                    </div>

                    <div className="section-logo">
                    <Link href="/"><a className="navbar-brand" style={{ textAlign: 'center', marginRight: '0', fontSize: '0' }}><span><img src='/static/new-droppy.svg' alt='Droppy logo' style={{ width:'90px'}} /></span></a></Link>
                    </div>

                    <div className="section-button">
                        <FaBars onClick={() => setShow(!Show)} size={25} color={'#fff'} style={{cursor:'pointer'}} />
                    </div>

                    <div className={`menu-links ${Show && 'active'}`}>
                        <FaTimes onClick={() => setShow(!Show)} size={25} color={'#fff'} style={{ position: 'absolute', top: '20px', right: '45px', cursor: 'pointer' }} />
                        <h3>MENU</h3>
                        <ul>
                            <li><Link href="/"><a className="nav-a">Acceuil</a></Link></li>
                            <li><Link href="/filmes"><a className="nav-a">Filmes</a></Link></li>
                            <li><Link href="/series"><a className="nav-a">Séries</a></Link></li>
                            <li><Link href="/animes"><a className="nav-a">Animes</a></Link></li>
                            <li><Link href="/a-propos"><a className="nav-a">à propos</a></Link></li>
                        </ul>
                        <div className="foot-menu">
                            <span className="ligne"></span>
                            <span><img src='/static/new-droppy.svg' alt='Droppy logo' style={{ width:'90px'}} /></span>
                        </div>
                    </div>
                </nav>
            </header>
            {props.children}
        </>
    )
}

export default Menu
