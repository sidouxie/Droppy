import React,{useState} from 'react'
import Link from 'next/link'
import { FaStar } from "react-icons/fa";


function SeriesPost({ series }) {
    const [Hover, setHover] = useState(null);

    function isHover(slug) {
        const select = Hover === slug;
        return select ? 'active' : ''; 
    }
    
    return (
        <div className='container-items'>
            {series.map(({ title, slug, cover, category, year,stars }) => (
                <Link key={slug} href={`/series/${slug}`} ><div onMouseEnter={()=> setHover(slug)} onMouseLeave={()=> setHover(slug)} className={`container-items-item ${isHover(slug)}`}>
                    <img className="container-items-item-img" src={cover.url} alt={title} />
                    <div className="container-items-item-info">
                    <h5> {title} </h5>
                    <p> {category}, {year}</p>
                        <div className="container-items-item-stars">
                            <FaStar className="star" size={13} color={"#ffc107"} />
                            <span className="star-number"> {parseFloat(stars)} </span>  
                        </div>
                </div>
                </div></Link>
        ))}
        </div>
    )
}

export default SeriesPost
