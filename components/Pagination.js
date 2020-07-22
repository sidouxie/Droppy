import React,{useState} from 'react'
import { number } from 'prop-types';

function Pagination({ filmePerPage, totalFilmes, paginate }) {
    const pageNumbers = [];
    const [Active, setActive] = useState(1);
    
    for (let i = 1; i <= Math.ceil(totalFilmes / filmePerPage); i++) {
        pageNumbers.push(i);
    }

    function isActive(number) {
        const select = Active === number;
        return select ? 'active' : '';
    }

    return (
        <nav>
            <ul style={{justifyContent:'center'}} className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => {paginate(number), setActive(number)}} className={`page-link ${isActive(number)}`}>{number}</button>
                        
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
