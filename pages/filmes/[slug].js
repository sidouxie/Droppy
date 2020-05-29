import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckarbp7t00za601xqca9ygwq9/master");

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
        <h1> {filme.title} </h1>
        <p><strong>Catégorie</strong> : {filme.category} </p>
        <p><strong>Réalisateur</strong> :  {filme.scenario} </p>
        <p><strong>Durée du filme</strong> :  {filme.duree} Min. </p>
        <p><strong>Résumé</strong> :  {filme.description} </p>
        <p><strong>Année de sortie</strong> :  {filme.year} </p>
        <img src={filme.cover.url} alt={filme.cover.fileName} />

    </React.Fragment>
)