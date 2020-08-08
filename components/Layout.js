import React from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';


const Layout = (props) => {
        return (
        <>
            <Head>
                    <title>Droppy - site streaming VF Filmes, Séries, Animes en français gratuit.</title>
                    <meta name="description" content="Retrouvez tout vos filmes, séries, animes préférer en streaming gratuit, illimité et soyez les premiers à voir les derniers épisodes sortis en VF et en full HD en exclusivité sur Droppy." />
                    <meta name="keywords" content="filmes streaming, séries streaming, animes streaming, streaming en illimité, qualité en haut définition, épisodes en version française, streaming en VF, exclusivité " />
                    <meta name="og:title" content="Droppy - site streaming VF Filmes, Séries, Animes en français gratuit." />
                    <meta name="og:url" content="https://droppy.ml" />
                    <meta name="og:image" content="https://droppy.ml/static/og_droppy.jpg" />
                    <meta name="og:type" content="article.movie" />
                    <meta name="og:locale" content="fr_FR" />
                    <meta name="og:site_name" content="Droppy" />
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
