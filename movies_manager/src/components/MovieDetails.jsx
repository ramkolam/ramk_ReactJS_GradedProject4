import React from 'react';

const MovieDetails = ({ movie, showMobileNavLayout }) => {
    const { title, releaseDate, genres, duration, imdbRating, contentRating, actors, storyline } = movie;

    // Calculate average rating
    const totalRatings = movie.ratings.length;
    const sumRatings = movie.ratings.reduce((acc, rating) => acc + rating, 0);
    const calculatedAverageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

    return (
        <>

            <div style={{ display: showMobileNavLayout ? 'inline-table' : 'inline-flex', justifyContent: 'space-evenly' }}>
                <div>
                    {!showMobileNavLayout &&
                    <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/${movie.poster}`}
                        alt={`${title} Poster`}
                        width={250}
                        height={350}
                        className="movie-poster" />
                    }
                    {showMobileNavLayout && 
                    <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/${movie.poster}`}
                        alt={`${title} Poster`}
                        width={150}
                        height={250}
                        className="movie-poster" />
                    }
                </div>
                <div className="text-sm-start" style={{ paddingLeft: '10px' }}>
                    <h1>{title}</h1>
                    <p><strong>Release Date:</strong> {releaseDate}</p>
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Genres:</strong> {genres.join(', ')}</p>
                    <p><strong>Content Rating:</strong> {contentRating}</p>
                    <p><strong>Average Rating:</strong> {calculatedAverageRating.toFixed(1)}</p>
                    <p><strong>IMDB Rating:</strong> {imdbRating}</p>
                    <h2><strong>Actors</strong></h2>
                    <ul>
                        {actors.map((actor) => (
                            <li key={actor}>{actor}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='text-sm-start' style={{ paddingLeft: '10px' }}>
                <h2>Storyline</h2>
                <p>{storyline}</p>
            </div>
        </>
    );
};

export default MovieDetails;