import React from 'react';
import Nav from './Nav';
import Head from 'next/head';




const Layout = (props) => {
        return (
        <>
            <Head>
                <title>Droppy - site streaming VF Filmes, Séries, Animes en francais gratuit.</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            </Head>

                <div className='min-Width'>
                    <Nav />
                    { props.children }
                </div>
        </>
    )
}

export default Layout;
