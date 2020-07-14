import React,{useState} from 'react'

function Pagination({ filmePerPage, totalFilmes, paginate }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalFilmes / filmePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul style={{justifyContent:'center'}} className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className="page-link">{number}</button>
                        
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
