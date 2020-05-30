import Link from 'next/link'
import { useState } from 'react';

const Nav = (props) => {
    const [Show, setShow] = useState(false);

    return (
<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display : 'flex'}}>
        <Link href="/"><a className="navbar-brand" style={{flexGrow : '1', textAlign: 'center'}}>LOGO</a></Link>
        <button className="navbar-toggler" onClick={() => setShow(!Show)} >
            <span className="navbar-toggler-icon"></span>
        </button>

                <div className={`collapse navbar-collapse ${Show && 'show'}`} style={{ flexGrow: '0', marginRight: '5em', fontWeight: '700', fontSize: '1.4em'}} id="navbarColor03">
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
            
            { props.children }
</>

    )
}

export default Nav;
