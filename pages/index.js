import  Link  from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Layout from '../components/Layout';


export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

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
    <Layout>
        <div className="fluid">
            <div className="image-fluid">
                <div id='bgImage' className="img-fluid"></div>
                <div className="sectionText">
                    <h1>Droppy site streaming gratuit</h1>
                </div>
            </div>
        </div>
        
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