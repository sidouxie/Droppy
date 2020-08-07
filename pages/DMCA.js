import Layout from '../components/Layout';
import React,{useEffect,useState} from 'react';
import { QueryContext } from '../components/FilmesContext';
import { GraphQLClient,gql } from 'graphql-request';


export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL); 

    const { filmes } = await graphcms.request(gql
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

const { series } = await graphcms.request(gql
        `{series{title slug type year category cover{url}}}`
    )

    return {
        props: {
            filmes,
            series
        },
    };
}

const DMCA = ({ filmes, series }) => { 
    
    const [Query, setQuery] = useState([]);

    useEffect(() => {
        const data = setQuery([...filmes, ...series])
        return data
    }, [])

    return ( 
            <QueryContext.Provider value={Query}>
            <Layout>
            <div className="section-head"></div>
                
            <div className="container">
                <div className="row">
                        <div className="section-textil">
                            <h1>DMCA : </h1>
                            <div className="section-textil-info" style={{color:'#b3b5bf'}}>
                                <span>Cette politique s'applique au site : droppy.ml</span>
                                <span>Date de dernière mise à jour : 20 juillet 2020</span>
                            </div>
                            <div className="textil">
                                <p>Droppy.now.sh respecte la propriété intellectuelle d'autrui et prend les questions de propriété intellectuelle très au sérieux et s’engage à répondre aux besoins des propriétaires de contenu tout en les aidant à gérer la publication de leur contenu en ligne.

Si vous pensez que votre travail protégé par un droit d'auteur a été copié de manière à constituer une violation du droit d'auteur et qu'il est accessible sur ce site, vous pouvez en informer notre agent des droits d'auteur, comme indiqué dans la loi DMCA (Digital Millennium Copyright Act of 1998). Pour que votre réclamation soit valide en vertu de la DMCA, vous devez fournir les informations suivantes lors de l'envoi d'un avis d'infraction au droit d'auteur:

Signature physique ou électronique d'une personne autorisée à agir au nom du titulaire du droit d'auteur Identification de l'œuvre protégée qui aurait été violée

Identification du matériel présumé contrefaisant ou faisant l'objet de l'activité illicite et devant être enlevé

Informations raisonnablement suffisantes pour permettre au fournisseur de services de contacter la partie plaignante, telles qu'une adresse, un numéro de téléphone et, le cas échéant, une adresse de courrier électronique

Une déclaration indiquant que la partie plaignante "croit de bonne foi que l'utilisation du matériel de la manière incriminée n'est pas autorisée par le titulaire du droit d'auteur, son mandataire ou la loi"

Une déclaration selon laquelle "les informations figurant dans la notification sont exactes" et "sous peine de parjure, la partie plaignante est autorisée à agir au nom du titulaire d'un droit exclusif prétendument violé"

Les informations ci-dessus doivent être envoyées par notification écrite, télécopiée ou par courrier électronique à l'agent désigné suivant:</p>
                            </div>
                            <div className="section-textil-info">
                                <span>Attention: bureau DMCA</span>
                                <span>Contactez-nous: <a target = "_blank" href='https://droppy.ml/contact'>https://droppy.ml/contact</a></span>
                            </div>
                            <div className="textil">
                                <p style={{fontWeight:'600'}}>NOUS VOUS ATTENONS QUE, EN VERTU DE LA LOI FÉDÉRALE, SI VOUS CONNAISSEZ INTEMPORAMMENT QUE LE MATÉRIEL EN LIGNE VIENT DE FAIRE FAUNE, VOUS POUVEZ ÊTRE SOUMIS À DES PÉNALITÉS CIVILES FORTES. CELLES-CI COMPRENNENT LES DOMMAGES MONÉTAIRES, LES FRAIS DE JUSTICE ET LES PROCUREURS ENGAGÉS PAR NOUS, PAR TOUT PROPRIÉTAIRE DE COPYRIGHT OU PAR LE TITULAIRE DE LA TITULAIRE DE LA LICENCE DE DROIT AU COPYRIGHT OU DE TITULAIRE DE LA LICENCE, QUI EST BLESSÉ COMME RÉSULTAT DE NOTRE CONFIANCE À LA SUITE DE VOTRE MISREPRESENTATION. VOUS POUVEZ ÉGALEMENT ÊTRE SOUMIS À DES POURSUITES PÉNALES POUR LE PARJOUR.</p>
                            </div>
                            <div className="textil">
                                <p>Ces informations ne doivent pas être interprétées comme des conseils juridiques. Pour plus d'informations sur les informations requises pour les notifications DMCA valides, voir 17 États-Unis d'Amérique. 512 (c) (3).</p>
                            </div>
                    </div>
                </div>
            </div>
            </Layout>
            </QueryContext.Provider>
    )
}

export default DMCA;