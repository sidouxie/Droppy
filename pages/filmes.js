import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { QueryContext } from '../components/FilmesContext';
import { GraphQLClient,gql } from 'graphql-request';
import FilmesPost from '../components/FilmesPost';
import NewPagi from '../components/NewPagi';
import PropTypes from 'prop-types';

export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 
    
    const { series } = await graphcms.request(gql
        `{series{title slug type year category cover{url}}}`
    )

    const { filmes } = await graphcms.request(gql
        `
            {
                filmes (orderBy:year_DESC, last:500){
                    title
                    type
                    slug
                    category
                    year
                    stars
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
            series
        },
    };
}

const Filmes = ({ filmes,series }) => { 
    const [Query, setQuery] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [FilmesPerPage] = useState(10);
    

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    //Avoir le dernier filme
    const indexOfLastFilme = CurrentPage * FilmesPerPage;
    const indexOfFirstFilme = indexOfLastFilme - FilmesPerPage;
    const currentFilme = filmes.slice(indexOfFirstFilme, indexOfLastFilme);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return ( 
            <QueryContext.Provider value={Query}>
                <Layout>
                    <Head>
                    <title>Droppy - Filmes en tout exclusivité 2020.</title>
                    </Head>
                    <div className="container-fluid">
                        <div className="row">
                        <div className='section-images'>{filmes.slice(0, 4).map(({ title, slug, cover,year,category }) => (
                            <div key={slug} className="bg-image">
                                <img className='bg-item' src={cover.url} alt={title} />
                                <div className="bg-overlay"></div>
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
                
                <FilmesPost filmes={currentFilme} />
                {/* <Pagination filmePerPage={FilmesPerPage} totalFilmes={filmes.length} paginate={paginate} /> */}
                <NewPagi filmePerPage={FilmesPerPage} totalFilmes={filmes.length} paginate={paginate} CurrentPage={CurrentPage} />
                </Layout>
            </QueryContext.Provider>
    )
}

export default Filmes;

Filmes.propTypes = {
    filmes: PropTypes.array.isRequired,
    series: PropTypes.array.isRequired,
}