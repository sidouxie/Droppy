import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/Layout';
import Carousel from 'react-multi-carousel';
import {QueryContext} from '../components/FilmesContext'



export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(
        `
            {
                filmes (orderBy:year_DESC){
                    type
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

    const { series } = await graphcms.request(
        `
            {
                series (orderBy:year_DESC){
                    type
                    title
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

    return {
        props: {
                filmes,
                series,
        },
    };
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export default ({ filmes, series }) => {

    const [Query, setQuery] = useState([]);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])
    
    return (
        <QueryContext.Provider value={ Query } >
    
        <Layout>
        <div className="fluid">
            <div className="image-fluid">
                <div id='bgImage' className="img-fluid"></div>
                <div className="sectionText">
                    <h1>Droppy site streaming en VF gratuit</h1>
                    <h2>Regardez tout vos Filmes, séries, animes préférer gratuitement.</h2>
                </div>
                <div className="scroll"></div>
            </div>
        </div>

        <div className="titre-desc">
            <h3>Filmes en tendances : </h3>
        </div>
            <Carousel
                responsive={responsive}
                ssr
                infinite={false}
                swipeable={true}
                draggable={true}
                customTransition="all .3 ease-in"
                transitionDuration={300}
            >
            {filmes.slice(0,10).map(({ title, slug, cover, category, year }) => (
                <div key={slug} className="container-card">
                    <Link href={`/filmes/${slug}`} ><img className="carouselCard" src={cover.url} alt={title} /></Link>
                    <div className="info-card">
                    <h5> {title} </h5>
                        <p> {category}, {year}</p>
                       
                </div>
                </div>
        ))}
        </Carousel> 
            
        <div className="titre-desc">
            <h3>Séries en tendances : </h3>
        </div>
        <Carousel
            responsive={responsive}
            ssr
            infinite={false}
            swipeable={true}
            draggable={true}
            customTransition="all .3 ease-in"
            transitionDuration={300}
        >
            {series.slice(0,10).map(({ title, slug, cover, category, year }) => (
                <div key={slug} className="container-card">
                    <Link href={`/series/${slug}`} ><img className="carouselCard" src={cover.url} alt={title} /></Link>
                    <div className="info-card">
                    <h5> {title} </h5>
                        <p> {category}, {year}</p>
                       
                </div>
                </div>
        ))}
        </Carousel> 
        </Layout>
        </QueryContext.Provider>
)}

