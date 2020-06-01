import  Link  from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/Layout';
import Carousel, { Dots } from '@brainhubeu/react-carousel';



export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(
        `
            {
                filmes {
                    title
                    slug
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


        <Carousel
            slidesPerPage={3}
            arrows
            infinite
        >
            {filmes.map(({ title, slug, cover }) => (
            <Link key={slug} href={`/filmes/${slug}`} ><img className="carouselCard" key={slug} src={cover.url} alt={title} /></Link>
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