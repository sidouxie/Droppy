import Layout from '../components/Layout';
import React,{useEffect,useState} from 'react';
import { QueryContext } from '../components/FilmesContext';
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

    const { series } = await graphcms.request(
        `{series{title slug type year category cover{url}}}`
    )


    return {
        props: {
            filmes,
            series
        },
    };
}

const series = ({ filmes, series }) => { 
    
    const [Query, setQuery] = useState([]);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    return ( 
            <QueryContext.Provider value={Query}>
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <h1>Bienvenue sur la page Séries.</h1>
                </div>
            </div>
            </Layout>
            </QueryContext.Provider>
    )
}

export default series;