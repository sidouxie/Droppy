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
                    <title>Droppy - à propos.</title>
                </Head>

                <div className="section-head-about">
                    <div className="about-title">
                        <h1>Plateforme de streaming la plus légère</h1>
                    </div>
            </div>
            <div className="container">
                <div className="row">
                        <div className="section-textil">
                            <div className="section-textil-info" style={{color: 'rgb(179, 181, 191)'}}>
                                <span>Conçu avec les dernières technos qui existe en ce moment, Droppy offre à ces web spectateurs le meilleur en matière d'expérience utilisateur pour passer un agréable moment.</span>
                            </div>
                            
                            <h3>Mon histoire avec Droppy</h3>
                            
                            <div className="textil">
                                <p>Au temps du confinement comme tout le monde j’ai passé mes journées à regarder des filmes et séries sur des sites de streaming gratuits, mais souvent le souci avec ces sites c’est que la majorité des temps ils sont en manque d’optimisation ou souvent mal codé ou ces pop-up qui sortent de nulle part chaque seconde ou ont cliqué et leur sécurité qui laisse à désirer.</p>
                                <p>Donc c’est là où j’ai eu l’idée de créer une plateforme qui soit rapide et simple, et le point le plus important qu’elle soit sécurisé.</p>
                                <p>Passionné depuis mon plus jeun âge par le monde du cinéma et du digital j’ai décidé de mettre tout mon savoir fair pour mettre en place une plateforme innovante et qui propose quelque chose de nouveau.</p>
                            </div>
                    </div>
                </div>
                </div>
                <div className="section-head-about-second">
                    <div className="about-title">
                        <h2>Pourquoi choisir de regarder sont filme préférée sur Droppy plutôt que sur d’autre sites ?</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="section-textil">
                            <div className="section-textil-info" style={{color: 'rgb(179, 181, 191)'}}>
                                <span>Excellent question cher cinéphile, car vous mettrez moins de temps pour commencer à regarder votre film sur Droppy que pour charger la page d'accueil de quelques sites streaming.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            </QueryContext.Provider>
    )
}

export default Apropos;