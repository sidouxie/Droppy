import React from 'react'
import Pagination from "react-js-pagination";


function NewPagi({ filmePerPage, totalFilmes, paginate, CurrentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFilmes / filmePerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <Pagination
                hideDisabled
                activePage={CurrentPage}
                itemsCountPerPage={filmePerPage}
                totalItemsCount={totalFilmes}
                pageRangeDisplayed={5}
                onChange={paginate}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    )
}

export default NewPagi
