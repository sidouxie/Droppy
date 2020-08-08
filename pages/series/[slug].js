import { GraphQLClient } from 'graphql-request';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { QueryContext } from '../../components/FilmesContext';
import Player from '../../components/Player';
import React, { useEffect, useState } from 'react';
import StarsRating from '../../components/StarsRating';




const graphcms = new GraphQLClient(process.env.API_URL);

export async function getStaticProps({ params }) {

    const { filmes } = await graphcms.request(
        `
            {
                filmes (orderBy:year_DESC, last: 500){
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

    const { series } = await graphcms.request(
        `
            {
                series (orderBy:year_DESC){
                    title
                    type
                    slug
                    category
                    year
                    cover {
                        url
                    }
                    saisons
                }
            }
        `
    );

    const { serie } = await graphcms.request(`
        query ProductPageQuery($slug : String!) {
            serie(where : {slug: $slug}) {
                title
                slug
                type
                description
                year
                scenario
                stars
                starstext
                category
                cover {
                    id
                    url
                    fileName
                }
                saisons
            }
        }
    `, {
        slug: params.slug
    })

    return {
        props: {
            filmes,
            series,
            serie,
        },
    };
}

export async function getStaticPaths() {
    const { series } = await graphcms.request(
        `
            {
                series {
                    slug 
                    title
                }
            }
        `
    );

    return {
        paths: series.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}


const serie = ({ filmes, series, serie }) => {
    const [Query, setQuery] = useState([]);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    return(
        <React.Fragment>
            <QueryContext.Provider value={Query}>
                <Layout>
                    <Head>
                        <title>Droppy - Regardez {serie.title} {serie.year} en VF streaming gratuit.</title>
                        <meta name="description" content={`${serie.title} ${serie.year} & catégorie : ${serie.category} & réalisateur : ${serie.scenario} & note des spéctateurs : ${serie.stars}/5 & résumer : ${serie.description.slice(0,150)}...`}/>
                        <meta name="keywords" content={`${serie.title} streaming vf, serie ${serie.year}, catégorie ${serie.category}, réalisateur ${serie.scenario}, voir serie ${serie.title} en streaming illimité, regardez serie ${serie.title} gratuit, ${serie.title} ${serie.year} sans pub, ${serie.title} saison ${serie.saisons.saison.length} en vf sur Mystream, ${serie.title} saison ${serie.saisons.saison.length} en vf sur Uptobox, ${serie.title} saison ${serie.saisons.saison.length} en vf sur Upstream, ${serie.title} saison ${serie.saisons.saison.length} complete en francais, ${serie.title} saison ${serie.saisons.saison.length} complete gratuit`}/>
                        <meta property="og:title" content={`${serie.title} ${serie.year} streaming vf`} />
                        <meta property="og:url" content={`https://droppy.ml/series/${serie.slug}`} />
                        <meta property="og:description" content={`${serie.title} ${serie.year} & catégorie : ${serie.category} & réalisateur : ${serie.scenario} & note des spéctateurs : ${serie.stars}/5 & résumer : ${serie.description.slice(0,150)}...`}/>
                    </Head>
                    <div className="bg-hero" >
                        <img src={serie.cover.url} alt={serie.cover.fileName} />
                    </div>
                    <div className="container">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="section-info">
                                <div className="section-one">
                                    <h2> {serie.title} </h2>
                                    <p><strong>Catégorie</strong> : {serie.category} </p>
                                    <p><strong>Réalisateur</strong> :  {serie.scenario} </p>
                                    <p><strong>Résumé</strong> :  {serie.description} </p>
                                    <p><strong>Année de sortie</strong> :  {serie.year} </p>
                                    <StarsRating stars={serie.stars} starstext={serie.starstext} />
                                </div>
                                <div className="section-two"><img src={serie.cover.url} alt={serie.cover.fileName} /></div>
                            </div>
                        </div>
                    </div>
            
                    <Player serie={serie} />
                </Layout>
            </QueryContext.Provider>
        </React.Fragment>
        
    )
}

export default serie;