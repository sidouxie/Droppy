import Layout from '../components/Layout';
import React,{useEffect,useState} from 'react';
import { QueryContext } from '../components/FilmesContext';
import { GraphQLClient } from 'graphql-request';
import SeriesPost from '../components/SeriesPost';
import Pagination from '../components/Pagination';


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
        `{series(orderBy:year_DESC){title slug type year category cover{url}}}`
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
    const [CurrentPage, setCurrentPage] = useState(1);
    const [SeriesPerPage] = useState(10);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    //Avoir le dernier serie
    const indexOfLastSerie = CurrentPage * SeriesPerPage;
    const indexOfFirstSerie = indexOfLastSerie - SeriesPerPage;
    const currentSerie = series.slice(indexOfFirstSerie, indexOfLastSerie);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return ( 
            <QueryContext.Provider value={Query}>
        <Layout>
        <div className="container-fluid">
                        <div className="row">
                        <div className='section-images'>{series.slice(0, 4).map(({ title, slug, cover,year,category }) => (
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

                <SeriesPost series={currentSerie} />
                <Pagination filmePerPage={SeriesPerPage} totalFilmes={series.length} paginate={paginate} />
            </Layout>
            </QueryContext.Provider>
    )
}

export default series;