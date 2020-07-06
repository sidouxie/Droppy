import Layout from '../components/Layout';
import React, {useEffect,useState} from 'react';
import { QueryContext } from '../components/FilmesContext';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 
    
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
    
    return {
        props: {
            filmes,
            series,
        },
    };
}

const Filmes = ({ filmes,series }) => { 
    const [Query, setQuery] = useState([]);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    return ( 
            <QueryContext.Provider value={Query}>
                <Layout>
                    <div className="container-fluid">
                        <div className="row">
                        <div className='section-images'>{filmes.slice(0, 4).map(({ title, slug, cover,year,category }) => (
                            <div key={slug} className="bg-image">
                                <img className='bg-item' src={cover.url} alt={title} />
                                <div className="section-text">
                                    <span className="title">{title}</span>
                                    <span className="ligne-orange"></span>
                                    <span className="category">{category}</span>
                                    <span className="annee">{year}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </Layout>
            </QueryContext.Provider>
    )
}

export default Filmes;