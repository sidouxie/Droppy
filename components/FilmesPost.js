import React,{useState} from 'react'
import Link from 'next/link'

function FilmesPost({ filmes }) {
    const [Hover, setHover] = useState(null);

    function isHover(slug) {
        const select = Hover === slug;
        return select ? 'active' : ''; 
    }

    return (
        <div className='container-items'>
            {filmes.map(({ title, slug, cover, category, year }) => (
                <Link key={slug} href={`/filmes/${slug}`} ><div onMouseEnter={()=> setHover(slug)} onMouseLeave={()=> setHover(slug)} className={`container-items-item ${isHover(slug)}`}>
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
