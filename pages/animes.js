import Layout from '../components/Layout';
import React from 'react';
import { FilmesContext } from '../components/FilmesContext';
import { GraphQLClient } from 'graphql-request';


export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

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


    return {
        props: {
            filmes,
        },
    };
}

const anime = ({filmes}) => { 
    return ( 
            <FilmesContext.Provider value={filmes}>
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <h1>Bienvenue sur la page Animes.</h1>
                </div>
            </div>
            </Layout>
            </FilmesContext.Provider>
    )
}

export default anime;