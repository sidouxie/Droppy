import React from 'react';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(
        `
            {
                filmes (orderBy:year_DESC){
                    title
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

export const FilmesContext = React.createContext();