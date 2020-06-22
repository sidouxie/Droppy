import React from 'react';
import Link from 'next/link';
import Downshift from 'downshift';


function SearchBar({Data}) {
    

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
                    <div className="autocomplet-result" {...getMenuProps()}>
                    {isOpen
                        ? Data
                            .filter(Data => !inputValue.toLowerCase() || Data.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
                            .slice(0, 10)
                            .map((Data, index) => (
                            <div className="autocomplet-result-item"
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
                                    <Link  href={`/filmes/${Data.slug}`}><a >
                                        <div className="autocomplet-result-item">
                                            <img className="autocomplet-result-thumbnail" src={Data.cover.url} alt={Data.title} width="53" height="68" />
                                            <span className=".autocomplet-result-text" style={{display:'flex', flexDirection:'column'}}>
                                                <span className=".autocomplet-result-title" style={{ fontSize: '1rem', fontWeight: 'bold'}}>{Data.title}</span>
                                                <span className=".autocomplet-result-complt" style={{ fontSize: '0.8rem', fontWeight: '600', color: '#6c757d'}}>{Data.category}</span>
                                                <span className=".autocomplet-result-complt" style={{ fontSize: '0.8rem', fontWeight: '600', color: '#6c757d'}}>{Data.year}</span>
                                            </span>
                                        </div>
                                    </a></Link>
                            </div>
                            ))
                        : null}
                    </div>
                </div>
                )}
  </Downshift>
        </React.Fragment>
    )
}

export default SearchBar;