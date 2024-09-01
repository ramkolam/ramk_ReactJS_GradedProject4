import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';

const AddToFavourite = (props) => {
    const { movie, favouriteMovieHandler, showFavourite } = props
    const [isSolid, setIsSolid] = useState(movie.favourite == undefined? false:movie.favourite);

    return (
        <>
            {showFavourite &&
                <div 
                style={{ display: 'flex',  paddingTop:'0.5em',fontSize:'1.5rem' }}
                onClick={(e) => {
                    setIsSolid((prevIsSolid) => !prevIsSolid);
                    favouriteMovieHandler(movie);
                }}>
                    Add to Favourites &nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon 
                        style={{ fontSize: "1.5rem", color: 'red' }} 
                        icon={isSolid ? faHeartFilled : faHeart} 
                         />
                </div>
            }
        </>
    );
};

export default AddToFavourite;