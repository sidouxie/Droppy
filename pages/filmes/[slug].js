import { GraphQLClient } from 'graphql-request';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { QueryContext } from '../../components/FilmesContext';
import PlayerFilme from '../../components/PlayerFilme';
import StarsRating from '../../components/StarsRating';
import React, { useEffect, useState} from 'react';



const graphcms = new GraphQLClient(process.env.API_URL);

export async function getStaticProps({ params }) {
    const { series } = await graphcms.request(
        `{series{title slug type year category cover{url}}}`
    )

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

    const { filme } = await graphcms.request(`
        query ProductPageQuery($slug : String!) {
            filme(where : {slug: $slug}) {
                title
                slug
                type
                description
                year
                scenario
                stars
                starstext
                category
                duree
                apiurl
                urlCode
                poster
                cover {
                    id
                    url
                    fileName
                }
            }
        }
    `, {
        slug: params.slug
    })

    return {
        props: {
            filmes,
            filme,
            series
        },
    };
}

export async function getStaticPaths() {
    const { filmes } = await graphcms.request(
        `
            {
                filmes(last:500) {
                    slug 
                    title
                }
            }
        `
    );

    return {
        paths: filmes.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

const filme = ({ filmes, filme, series }) => {

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
                        <title>Droppy - {filme.title} {filme.year} en VF streaming gratuit.</title>
                        <meta name="description" content={`${filme.title} ${filme.year} & catégorie : ${filme.category} & réalisateur : ${filme.scenario} & note des spéctateurs : ${filme.stars}/5 & résumer : ${filme.description.slice(0,150)}...`}/>
                        <meta name="keywords" content={`${filme.title} streaming vf, filme ${filme.year}, catégorie ${filme.category}, réalisateur ${filme.scenario}, durée filme ${filme.duree} min, voir filme ${filme.title} en streaming illimité, regardez filme ${filme.title} gratuit, ${filme.title} ${filme.year} sans pub, ${filme.title} en vf sur Mystream, ${filme.title} en vf sur Uptobox, ${filme.title} en vf sur Upstream, ${filme.title} complete en francais, ${filme.title} complete gratuit`}/>
                        <meta property="og:title" content={`${filme.title} ${filme.year} streaming vf`} />
                        <meta property="og:url" content={`https://droppy.ml/filmes/${filme.slug}`} />
                        <meta property="og:description" content={`${filme.title} ${filme.year} & catégorie : ${filme.category} & réalisateur : ${filme.scenario} & note des spéctateurs : ${filme.stars}/5 & résumer : ${filme.description.slice(0,150)}...`}/>
                    </Head>
                    <div className="bg-hero" >
                        <img src={filme.cover.url} alt={filme.cover.fileName} />
                    </div>
                    <div className="container">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="section-info">
                                <div className="section-one">
                                    <h2> {filme.title} </h2>
                                    <p><strong>Catégorie</strong> : {filme.category} </p>
                                    <p><strong>Réalisateur</strong> :  {filme.scenario} </p>
                                    <p><strong>Durée du filme</strong> :  {filme.duree} Min. </p>
                                    <p><strong>Résumé</strong> :  {filme.description} </p>
                                    <p><strong>Année de sortie</strong> :  {filme.year} </p>
                                    <StarsRating stars={filme.stars} starstext={filme.starstext} />
                                </div>
                                <div className="section-two"><img src={filme.cover.url} alt={filme.cover.fileName} /></div>
                            </div>
                        </div>
                    </div>
                    <PlayerFilme filme={filme} />
                </Layout>
            </QueryContext.Provider>
        </React.Fragment>
        
    )
}

export default filme;