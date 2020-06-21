import React from 'react';
import Link from 'next/link';



function SearchBar() {

    return (
        
        <React.Fragment>
            <input type="text" name="search" className="input-search" placeholder="Rechercher un film, une série, une star..."/>
        </React.Fragment>
    )
}

export default SearchBar;