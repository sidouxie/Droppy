import { GraphQLClient } from 'graphql-request';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { FilmesContext } from '../../components/FilmesContext';
import Player from '../../components/Player';


const graphcms = new GraphQLClient(process.env.API_URL);

export async function getStaticProps({ params }) {
    
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
        `
            {
                series (orderBy:year_DESC){
                    title
                    type
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

    const { serie } = await graphcms.request(`
        query ProductPageQuery($slug : String!) {
            serie(where : {slug: $slug}) {
                title
                type
                description
                year
                scenario
                category
                cover {
                    id
                    url
                    fileName
                }
                saisons
            }
        }
    `, {
        slug: params.slug
    })

    return {
        props: {
            filmes,
            series,
            serie,
        },
    };
}

export async function getStaticPaths() {
    const { series } = await graphcms.request(
        `
            {
                series {
                    slug 
                    title
                }
            }
        `
    );

    return {
        paths: series.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}


function setCount() {
    const count = 0;
    count + 1;
    return console.log(count);
}
export default ({ filmes, series, serie, count }) => (
    <React.Fragment>
        <FilmesContext.Provider value={filmes, series}>
        <Layout>
            <Head><title>Droppy - Regardez {serie.title} en VF streaming gratuit.</title></Head>
            <div className="bg-hero" >
                <img src={serie.cover.url} alt={serie.cover.fileName} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="section-info">
                        <div className="section-one">
                        <h2> {serie.title} </h2>
                <p><strong>Catégorie</strong> : {serie.category} </p>
                <p><strong>Réalisateur</strong> :  {serie.scenario} </p>
                <p><strong>Résumé</strong> :  {serie.description} </p>
                <p><strong>Année de sortie</strong> :  {serie.year} </p>
                    </div>
                    <div className="section-two"><img src={serie.cover.url} alt={serie.cover.fileName} /></div>
                    </div>
                </div>
            </div>
            
            <Player serie={serie} />
            </Layout>
            </FilmesContext.Provider>
        </React.Fragment>
        
)