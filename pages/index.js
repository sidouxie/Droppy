import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GraphQLClient, request } from 'graphql-request';
import Layout from '../components/Layout';
import Carousel from 'react-multi-carousel';
import { QueryContext } from '../components/FilmesContext'

// ajout 03/08 2 filme


export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(
        `
            {
                filmes (orderBy:year_DESC, last:500){
                    id
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

    const trends = `{
        filmes(orderBy: year_DESC, where: {stars_contains: "4"}){
            id
            type
            title
            slug
            category
            year
            cover {
                url
            }
          }
    }`

    const trendFilme = await graphcms.request(trends);

    return {
        props: {
                filmes,
                series,
                trendFilme
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


const Index = ({ filmes, series, trendFilme }) => {

    const [Query, setQuery] = useState([]);
    const [Trends] = useState(trendFilme);

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
            {Trends.filmes.slice(0,10).map(({ id, title, slug, cover, category, year }) => (
                <div key={id} className="container-card">
                    <Link href={`/filmes/${slug}`} ><img className="carouselCard" src={cover.url} alt={title} /></Link>

                    <div className="info-card">
                        <h5> {title} </h5>
                            <p> {category}, {year}</p>
                        
                        </div>           
                </div>
        ))}
        </Carousel>

        {/* Dernier filme Rajouté */}
                
        <div className="titre-desc">
            <h3>Dernier filme rajouté : </h3>
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
            {filmes.slice(0,10).map(({ id, title, slug, cover, category, year }) => (
                <div key={id} className="container-card">
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

export default Index;