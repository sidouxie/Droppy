import Link from 'next/link'

const  Nav = ( props ) => {
    return (
<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/"><a className="navbar-brand">LOGO</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
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
