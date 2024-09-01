import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AddToFavourite from "../components/AddToFavourite"
import { postFavourite, getFavouriteById, deleteFavouriteById } from "../service/moviesService";

const MovieCard = ({ movie, showFavourite, handleFavourite, openPortal }) => {
    const average = array => array.reduce((a, b) => a + b) / array.length;
    const sum = array => array.reduce((a, b) => a + b);
    const onFavouriteClickHandler = async (favouriteMovie) => {
        let response = null;
        try {
            response = await getFavouriteById(favouriteMovie.id);
            response = await deleteFavouriteById(favouriteMovie.id);
            handleFavourite({... response, favourite: false});
        } catch (error) {
            response = await postFavourite({ ...favouriteMovie, favourite: true });
            handleFavourite({... response, favourite: true});
        }               
    }

    const handleCardClick = () => {
        openPortal(movie);
        const myDiv = document.getElementById("header");
        myDiv.style.display = "none";
    };

    return (
        <>
            <Card onClick={handleCardClick}>
                <Card.Img
                    variant="top"
                    className="img-fluid"
                    alt="Movie Poster"
                    src={`${process.env.REACT_APP_API_BASE_URL}/${movie.poster}`}
                    width={200}
                    height={250}
                />
                <Card.Body style={{padding:'0px', margin:'0px'}}>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Body style={{ fontSize:'1.1rem'}}>
                        <Card.Text>
                            {movie.genres.join('/')}
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <FontAwesomeIcon icon={faStar} /> {average(movie.ratings).toFixed(1)}/10
                            </div>
                            <div>
                                {sum(movie.ratings)} Votes
                            </div>
                        </div>
                    </Card.Body>
                </Card.Body>
            </Card>
            <AddToFavourite movie={movie}
                favouriteMovieHandler={onFavouriteClickHandler}
                showFavourite={showFavourite} />
        </>
    );
};

export default MovieCard;