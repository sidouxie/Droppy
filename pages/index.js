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
                    <h1>Droppy site streaming en VF gratuit</h1>
                    <h2>Regardez tout vos Filmes, séries, animes préférer gratuitement.</h2>
                </div>
                <div className="scroll"></div>
            </div>
        </div>


        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-50" src="https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-4-carousel-800x547.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-50" src="https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-4-carousel-800x547.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-50" src="https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-4-carousel-800x547.jpg" alt="Third slide" />
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