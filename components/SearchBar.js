import React, { useContext } from 'react';
import Link from 'next/link';
import Downshift from 'downshift';
import { FilmesContext } from '../pages/index';

function SearchBar() {
    const Data = useContext(FilmesContext)

    return (
        
        <React.Fragment>
                        
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
                <div className="input-search">
                    <div
                    style={{display: 'block'}}
                    {...getRootProps({}, {suppressRefError: true})}
                    >
                    <input {...getInputProps()} className="input-search" placeholder="Rechercher un film, série, anime..." />
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
        </React.Fragment>
    )
}

export default SearchBar;