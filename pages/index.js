import React from 'react';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/Layout';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import dynamic from 'next/dynamic';


const useMediaQuery = () => {dynamic(() => import('react-hook-media-query'), { ssr: false } ) ;}

const setResize = useMediaQuery('(max-width: 500px)');

export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(
        `
            {
                filmes {
                    title
                    slug
                    category
                    year
                    cover {
                        id
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




export default ({ filmes }) =>
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
            slidesPerPage={setResize ? 1 : 3}
            arrows
            infinite
        >
            {filmes.map(({ title, slug, cover, category, year }) => (
                <div key={slug}>
                    <Link key={slug} href={`/filmes/${slug}`} ><img className="carouselCard" key={slug} src={cover.url} alt={title} /></Link>
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
