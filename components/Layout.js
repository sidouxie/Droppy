import Nav from './Nav';
import Head from 'next/head'

const Layout = ( props ) => {
    return (
        <>
           <Head>
                <title>Droppy - site streaming VF Filmes, Séries, Animes en francais gratuit.</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
            </Head>

            <Nav />

            <div className="container">
                <div className="row">
                <div className="md5">{ props.children }</div>
                </div>
            </div>
            
            
        </>
    )
}

export default Layout;
