import React from 'react';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import Downshift from 'downshift';
import Layout from '../components/Layout';

export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.API_URL);

    const { filmes } = await graphcms.request(`
        {
            filmes {
                id
                title
                slug
                description
                year
                scenario
                category
                duree
                apiurl
                poster
                cover {
                    id
                    url
                    fileName
                }
            }
        }
    `)

    return {
        props: {
            filmes,
        },
    };
};




function filmes({filmes}) {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <h1>Bienvenue sur la page Filmes</h1>
                    <p>push some data !</p>
                </div>
            </div>
            <Downshift
                onChange={selection =>
                (selection ? `You selected ${selection.value}` : 'Selection Cleared')
                }
                itemToString={filmes => (filmes ? filmes.title : '')}
            >
                {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                getRootProps,
                }) => (
                <div>
                    <label {...getLabelProps()}>Veuillez entrer votre filmes : </label>
                    <div
                    style={{display: 'inline-block'}}
                    {...getRootProps({}, {suppressRefError: true})}
                    >
                    <input {...getInputProps()} placeholder="Rechercher un film, série, anime..." />
                    </div>
                    <ul {...getMenuProps()}>
                    {isOpen
                        ? filmes
                            .filter(filmes => !inputValue.toLowerCase() || filmes.title.toLowerCase().includes(inputValue))
                            .slice(0, 10)
                            .map((filmes, index) => (
                            <li
                                {...getItemProps({
                                    key: filmes.slug,
                                    item: filmes.title,
                                    itemID: filmes.id,
                                    index,
                                    filmes,
                                    style: {
                                        backgroundColor:
                                        highlightedIndex === index ? 'lightgray' : 'white',
                                        fontWeight: selectedItem === filmes ? 'bold' : 'normal',
                                },
                                })}
                            >
                                <Link href={`/filmes/${filmes.slug}`}><a>{filmes.title}</a></Link>
                            </li>
                            ))
                        : null}
                    </ul>
                </div>
                )}
  </Downshift>
        </Layout>
    )
}

export default filmes
