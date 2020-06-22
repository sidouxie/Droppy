import React, {useContext} from 'react';
import Link from 'next/link';
import Downshift from 'downshift';
import Layout from '../components/Layout';
import { FilmesContext } from '../components/FilmesContext';


function Filmes() {
    const Data = useContext(FilmesContext);

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
                itemToString={Data => (Data ? Data.title : '')}
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
                    <label {...getLabelProps()}>Veuillez entrer votre Data : </label>
                    <div
                    style={{display: 'inline-block'}}
                    {...getRootProps({}, {suppressRefError: true})}
                    >
                    <input {...getInputProps()} placeholder="Rechercher un film, série, anime..." />
                    </div>
                    <ul {...getMenuProps()}>
                    {isOpen
                        ? Data
                            .filter(Data => !inputValue.toLowerCase() || Data.title.toLowerCase().includes(inputValue))
                            .slice(0, 10)
                            .map((Data, index) => (
                            <li
                                {...getItemProps({
                                    key: Data.slug,
                                    item: Data.title,
                                    itemID: Data.id,
                                    index,
                                    Data,
                                    style: {
                                        backgroundColor:
                                        highlightedIndex === index ? 'lightgray' : 'white',
                                        fontWeight: selectedItem === Data ? 'bold' : 'normal',
                                },
                                })}
                            >
                                <Link href={`/filmes/${Data.slug}`}><a>{Data.title}</a></Link>
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

export default Filmes;
