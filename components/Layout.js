import React from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';


const Layout = (props) => {
        return (
        <>
            <Head>                   
                    <meta property="og:image" content="https://droppy.ml/static/og_droppy.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="627" />
                    <meta property="og:type" content="article.movie" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:site_name" content="Droppy" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content="https://droppy.ml/static/og_droppy.jpg" />
                    <meta name="twitter:site" content="Droppy" />
                    <meta name="twitter:title" content="Droppy - site streaming VF Filmes, Séries, Animes en français gratuit." />
                    <meta name="twitter:description" content="Retrouvez tout vos filmes, séries, animes préférer en streaming gratuit, illimité et soyez les premiers à voir les derniers épisodes en exclusivité sur Droppy." />
                    <link name="canonical" href="https://droppy.ml" />
                    <link rel="apple-touch-icon" sizes="180x180" href='/static/droppy_favicon.ico' ></link>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/droppy_favicon.ico" ></link>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/droppy_favicon.ico" ></link>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                    

            </Head>

                <div className='min-Width'>
                    <Menu />
                    {props.children}
                    <Footer />
                </div>
        </>
    )
}

export default Layout;
