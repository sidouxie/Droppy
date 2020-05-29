import  Link  from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
    const graphcms = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckarbp7t00za601xqca9ygwq9/master"); 

    const { filmes } = await graphcms.request(
        `
            {
                filmes {
                    title
                    slug
                   
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
<>
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
</>