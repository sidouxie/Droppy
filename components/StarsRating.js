import React,{ useState} from "react";
import { FaStar } from "react-icons/fa";

function StarsRating({stars, starstext}) {
    const [Rating, setRating] = useState(parseFloat(stars))
    return (
        <div className='section-star'>
            <h5>SPECTATEURS</h5>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', height:'30px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', marginRight: '1em', height:'20px'}}>
                {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label className='star-eval' key={i} style={{display:'block'}}>
                        <input
                            style={{display:'none'}}
                            type="radio"
                            name='rating'
                            value={ratingValue}
                        
                        />
                        <FaStar className='star' color={ratingValue <= Rating ? '#ffc107' : '#e4e5e9'} size={20} />
                    </label>
                )
            })}
                </div>
                <span className='star-eval-text'>{Rating}</span>
            </div>
            <span style={{fontSize:'13px',fontStyle:'italic'}} >{starstext}</span>
        </div>
    )
}

export default StarsRating
