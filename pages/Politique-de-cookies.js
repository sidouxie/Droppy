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

const PolitiquesDeCookies = ({ filmes, series }) => { 
    
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
                            <h1>POLITIQUE DE COOKIES :</h1>
                            <div className="section-textil-info" style={{color:'#b3b5bf'}}>
                                <span>Cette politique s'applique au site : droppy.ml</span>
                                <span>Date de dernière mise à jour : 20 juillet 2020</span>
                            </div>

                            <div className="textil">
                                <p>Droppy attache une attention toute particulière à votre information sur l’emploi des cookies. Cette page a pour but de vous sensibiliser à l’utilisation des cookies, vous informer de l’utilisation qui en est faite et vous indiquer comment paramétrer vos outils pour vous y opposer.</p>
                                <p>Un cookie est un fichier texte de taille limitée déposé par le navigateur et stocké sur votre terminal lors de votre visite sur un site internet.</p>
                                <p>Lorsque vous consultez le site internet droopy.now.sh nous pouvons, sous réserve de vos choix, être amenés à installer des cookies sur votre navigateur. Lorsque vous vous connecterez sur le site à l'aide du même terminal, le navigateur pourra utiliser les données du cookie et les transmettre au site.</p>
                                <p>Les cookies déposés sont importants pour le bon fonctionnement du site. Ils permettent en particulier de :</p>
                                <p>Personnaliser les contenus que nous vous proposons
                                Adapter la présentation de nos pages de site aux préférences d’affichage de votre terminal, aux matériels, logiciels de visualisation ou de lecture de votre terminal
                                Mémoriser des informations relatives à un formulaire que vous avez rempli sur notre site lors de votre inscription par exemple
                                Mémoriser les produits, services ou informations que vous avez choisis
                                Collecter les statistiques en vue d'optimiser les fonctionnalités du site
Certains cookies peuvent d’ores et déjà être implantés sur votre terminal et d’autres doivent recueillir le consentement de l’utilisateur. Lorsqu’un cookie qui nécessite le consentement de l’internaute est susceptible d’être déposé sur votre page Internet, un bandeau vous informe de sa présence. Tant que Droppy n’a pas obtenu votre consentement, les cookies ne pourront pas être déposés ou lus sur votre terminal.</p>
                                
                            </div>
                            <h3>LES DIFFÉRENTS TYPES DE COOKIES</h3>
                            <div className="textil">
                                <p>Les cookies Droppy
                                Ces cookies sont indispensables au bon fonctionnement du service et de son optimisation tels que :

                                la mémorisation des informations relatives à un formulaire que vous avez rempli sur le site (inscription ou souscription à des produits, services..)
                                l'accès à des espaces personnels et réservés du site allociné comme votre compte utilisateur par le biais d'identifiants personnels (email, mot de passe..)
                                un service de geolocalisation pour un accès plus direct aux séances et salles proche de votre localisation
                                Les cookies tiers
L'émission et l'utilisation de cookies par des tiers, sont soumises aux politiques « cookies » de ces tiers. Nous vous informons de la finalité des cookies dont nous avons connaissance et des moyens dont vous disposez pour effectuer des choix.</p>
                                <p>Des cookies sont déposés dans nos e-mailings par nos partenaires. Ces cookies sont destinés à personnaliser les publicités lors de votre navigation sur Internet. Ces données vont permettre d’adapter la communication de nos partenaires à votre égard au moyen de tout support électronique (via courrier électronique, applications, SMS…) ou traditionnel (courrier ou appels téléphoniques) pour autant que vous ayez, à l’origine, donné votre accord pour que vos données personnelles soient communiquées à nos partenaires.</p>

                            </div>
                            <h3>COMMENT PARAMÉTRER LE DÉPÔT DE COOKIES ?</h3>
                            <div className="textil">
                                <p>Vos choix ne sont jamais définitifs. À tout moment, vous pouvez désactiver tout ou partie des cookies selon les procédés décrits ci-dessous.</p>
                            </div>
                            <h3>PARAMÉTRAGE DE VOTRE LOGICIEL DE NAVIGATION</h3>
                            <div className="textil">
                                <p>Pour la gestion des cookies et de vos choix, la configuration de chaque navigateur est différente. Nous vous informons qu’en paramétrant votre navigateur pour refuser les cookies, certaines fonctionnalités du site ne seront pas accessibles. Nous ne saurons en aucun cas être tenu pour responsable.</p>
                            </div>
                    </div>
                </div>
            </div>
            </Layout>
            </QueryContext.Provider>
    )
}

export default PolitiquesDeCookies;