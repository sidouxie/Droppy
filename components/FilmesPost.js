import React from 'react'
import Link from 'next/link'

function FilmesPost({ filmes }) {
    
    return (
        <div className='container-items'>
            {filmes.map(({ title, slug, cover, category, year }) => (
                <Link key={slug} href={`/filmes/${slug}`} ><div className="container-items-item">
                    <img className="container-items-item-img" src={cover.url} alt={title} />
                    <div className="container-items-item-info">
                    <h5> {title} </h5>
                    <p> {category}, {year}</p>
                       
                </div>
                </div></Link>
        ))}
        </div>
    )
}

export default FilmesPost
