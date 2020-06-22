import React from 'react';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/Layout';
import Carousel from 'react-multi-carousel';
import {FilmesContext} from '../components/FilmesContext'



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



export default ({ filmes }) =>
<FilmesContext.Provider value={ filmes } >
    
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
        >
            {filmes.map(({ title, slug, cover, category, year }) => (
                <div key={slug} className="container-card">
                    <Link href={`/filmes/${slug}`} ><img className="carouselCard" src={cover.url} alt={title} /></Link>
                    <div className="info-card">
                    <h5> {title} </h5>
                        <p> {category}, {year}</p>
                       
                </div>
                </div>
        ))}
        </Carousel>  


       <div className="container">
            <div className="row">
            <div>
        <ul>
            {filmes.map(({ slug, title }) => (
                <li key={slug}>
                    <Link key={slug} href={`/filmes/${slug}`}>
                        <a> {title} </a>
                    </Link></li>
                ))} 
        </ul>
    </div>
           </div>
       </div>
        </Layout>
        </FilmesContext.Provider>
