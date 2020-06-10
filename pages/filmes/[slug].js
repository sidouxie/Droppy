import { GraphQLClient } from 'graphql-request';
import Layout from '../../components/Layout';
import Head from 'next/head';
import ReactPlayer from 'react-player/youtube';

const graphcms = new GraphQLClient(process.env.API_URL);

export async function getStaticProps({ params }) {
    const { filme } = await graphcms.request(`
        query ProductPageQuery($slug : String!) {
            filme(where : {slug: $slug}) {
                title
                description
                year
                scenario
                category
                duree
                apiurl
                cover {
                    id
                    url
                    fileName
                }
            }
        }
    `, {
        slug: params.slug
    })

    return {
        props: {
            filme,
        },
    };
}

export async function getStaticPaths() {
    const { filmes } = await graphcms.request(
        `
            {
                filmes {
                    slug 
                    title
                }
            }
        `
    );

    return {
        paths: filmes.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export default ({ filme }) => (
    
    <React.Fragment>
        <Layout>
            <Head><title>Droppy - Regardez {filme.title} en VF streaming gratuit.</title></Head>
            <div className="bg-hero" >
                <img src={filme.cover.url} alt={filme.cover.fileName} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="section-info">
                        <div className="section-one">
                        <h2> {filme.title} </h2>
                <p><strong>Catégorie</strong> : {filme.category} </p>
                <p><strong>Réalisateur</strong> :  {filme.scenario} </p>
                <p><strong>Durée du filme</strong> :  {filme.duree} Min. </p>
                <p><strong>Résumé</strong> :  {filme.description} </p>
                <p><strong>Année de sortie</strong> :  {filme.year} </p>
                    </div>
                    <div className="section-two"><img src={filme.cover.url} alt={filme.cover.fileName} /></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-info">
                    <div className="section-one">
                        <h3>Bande d'annonce : {filme.title} en VF </h3>
                    </div>
                </div>
                <div className="section-vid">
                    <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url={filme.apiurl}
                                width='100%'
                                height='100%'
                                controls
                                />
                        </div>
            </div>
            </div>
        </Layout>
        </React.Fragment>
        
)