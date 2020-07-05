import { GraphQLClient } from 'graphql-request';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { QueryContext } from '../../components/FilmesContext';
import PlayerFilme from '../../components/PlayerFilme';
import React, { useEffect, useState } from 'react';


const graphcms = new GraphQLClient(process.env.API_URL);

export async function getStaticProps({ params }) {
    const { series } = await graphcms.request(
        `{series{title slug type year category cover{url}}}`
    )

    const { filmes } = await graphcms.request(
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

    const { filme } = await graphcms.request(`
        query ProductPageQuery($slug : String!) {
            filme(where : {slug: $slug}) {
                title
                type
                description
                year
                scenario
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
                filmes {
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

export default ({ filmes, filme, series }) => {

    const [Query, setQuery] = useState([]);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    return(
    
        <React.Fragment>
            <QueryContext.Provider value={Query}>
                <Layout>
                    <Head><title>Droppy - Regardez {filme.title} en VF streaming gratuit.</title></Head>
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