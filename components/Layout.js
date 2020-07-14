import React from 'react';
import Nav from './Nav';
import Head from 'next/head';


const Layout = (props) => {
        return (
        <>
            <Head>
                <title>Droppy - site streaming VF Filmes, Séries, Animes en français gratuit.</title>
                    <link rel="apple-touch-icon" sizes="180x180" href='/static/droppy_favicon.ico' ></link>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/droppy_favicon.ico" ></link>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/droppy_favicon.ico" ></link>
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
