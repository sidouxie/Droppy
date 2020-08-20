import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { QueryContext } from '../components/FilmesContext';
import { GraphQLClient,gql } from 'graphql-request';


export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(gql
        `
            {
                filmes (orderBy:year_DESC){
                    title
                    type
                    slug
                    category
                    year
                    cover {
                        url
                    }
                }
            }
        `
    );

const { series } = await graphcms.request(gql
        `{series{title slug type year category cover{url}}}`
    )

    return {
        props: {
            filmes,
            series
        },
    };
}

const Apropos = ({ filmes, series }) => { 
    
    const [Query, setQuery] = useState([]);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    return ( 
            <QueryContext.Provider value={Query}>
            <Layout>
                <Head>
                    <title>Droppy - à propos</title>
                </Head>

                <div className="section-head-about">
                    <div className="about-title">
                        <h1>Plateforme de streaming la plus légère</h1>
                        <p className="subtitle">plus léger qu'une plume</p>
                    </div>
            </div>
            <div className="container">
                <div className="row">
                        <div className="section-textil">
                            <div className="section-textil-info" style={{color: 'rgb(179, 181, 191)'}}>
                                <span>Conçu avec les dernières technos qui existe en ce moment, Droppy offre à ces web spectateurs le meilleur en matière d'expérience utilisateur pour passer un agréable moment.</span>
                            </div>
                            
                            <h2>Mon histoire avec Droppy</h2>
                            <span className="subtitle">Le storytalling ce n'est pas mon fort encore moins le copywriters.</span>
                            
                            <div className="textil">
                                <p>Au temps du confinement comme tout le monde j’ai passé mes journées à regarder des filmes et séries sur des sites de streaming gratuits, mais souvent le souci avec ces sites c’est que la majorité du temps ils sont en manque d’optimisation ou souvent mal codés et le point qui ma tourner le cerveau c'est tout ces pop-up qui sortent de nulle part partout ou on clique sur le site et sans parler de leur sécurité qui laisse à désirer.</p>
                                <p>Donc c’est là où j’ai eu l’idée de créer une plateforme qui soit rapide et simple à utiliser, et le point le plus important qu’elle soit sécurisé.</p>
                                <p>Passionné depuis mon plus jeun âge par le monde du cinéma et du digital j’ai décidé de mettre tout mon savoir fair pour mettre en place une plateforme innovante et qui propose des services dignes des plus grandes plateformes de streaming.</p>
                            </div>
                    </div>
                </div>
                </div>
                <div className="section-head-about-second">
                    <div className="about-title">
                        <h2>Pourquoi choisir Droppy plutôt que d’autre sites ?</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="section-textil">
                            <div className="section-textil-info" style={{color: 'rgb(179, 181, 191)'}}>
                                <span>Excellent question cher cinéphile, car vous mettrez moins de temps pour commencer à regarder votre film sur Droppy que pour charger la page d'accueil de quelques sites streaming.</span>
                            </div>
                        </div>
                        <div className="mobile-responsive">
                            <img src="static/iphone-png-2.png" alt="iphone mobile responsive"/>
                        </div>
        
                    </div>
                </div>

                <div className="section-head-about-quality">
                    <div className="about-title">
                        <h2>Les qualités de la plateforme</h2>
                    </div>
                </div>

                <div className="section-quality">
                            <div className="bloc-info">
                                <span className="icon"><img src="static/icone-1.svg" alt="icone svg"/></span>
                                <div className="title">
                                    <h3>Contenu exclusive</h3>
                                    <p className="subtitle">
                                    Le contenu est 100% francophone et en toute exclusivité, la majorité du temps en qualité DVD ou 720p.
                                    </p>
                                </div>
                            </div>

                            <div className="bloc-info">
                                <span className="icon"><img src="static/icone-2.svg" alt="icone svg"/></span>
                                <div className="title">
                                    <h3>Sans Pop-up</h3>
                                    <p className="subtitle">
                                    Ne pas vous attendre à être bombardé de pop-up en arrivant sur le site.
                                    </p>
                                </div>
                            </div>

                            <div className="bloc-info">
                                <span className="icon"><img src="static/icone-3.svg" alt="icone svg"/></span>
                                <div className="title">
                                    <h3>Visionnage gratuit</h3>
                                    <p className="subtitle">
                                    Le visionnage du contenu est complètement gratuit et le restera pour toujours.
                                    </p>
                                </div>
                            </div>

                            <div className="bloc-info">
                                <span className="icon"><img src="static/icone-4.svg" alt="icone svg"/></span>
                                <div className="title">
                                    <h3>Mises à jours</h3>
                                    <p className="subtitle">
                                    Droppy évolue chaque jour et reçoit une maintenance journalière pour garder la sécurité et la performance de la plateforme.
                                    </p>
                                </div>
                            </div>

                            <div className="bloc-info">
                                <span className="icon"><img src="static/icone-5.svg" alt="icone svg"/></span>
                                <div className="title">
                                    <h3>Expérience utilisateur</h3>
                                    <p className="subtitle">
                                    Une interface simple et moderne pour faciliter l’expérience utilisateur et la rendre agréable.
                                    </p>
                                </div>
                            </div>

                            <div className="bloc-info">
                                <span className="icon"><img src="static/icone-6.svg" alt="icone svg"/></span>
                                <div className="title">
                                    <h3>Recherche simplifié</h3>
                                    <p className="subtitle">
                                    Droppy vous offre une barre de recherche performante pour trouver votre film préféré rapidement.
                                    </p>
                                </div>
                            </div>

                        </div>
            </Layout>
            </QueryContext.Provider>
    )
}

export default Apropos;