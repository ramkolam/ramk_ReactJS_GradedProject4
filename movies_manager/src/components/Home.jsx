import { useEffect, useState, useRef } from "react";
import {
    getFavourite, getMoviesComing, getMoviesInTheaters, getTopRatedIndia, getTopRatedMovies,
    putMoviesInTheaters, putMoviesComing,
    putTopRatedIndia, putTopRatedMovies
} from "../service/moviesService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Header from "../components/Header";
import Footer from "../components/Footer";
import '../home.css';
import MovieContent from "./MovieContent";
let fetchData;
function Home() {
    const [moviesInTheaters, setMoviesInTheaters] = useState([]);
    const [moviesComing, setMoviesComing] = useState([]);
    const [topRatedIndia, setTopRatedIndia] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [favouriteAdded, setFavouriteAdded] = useState(false);
    const effectRan = useRef(false);
    const [showMobileNavLayout, setShowMobileNavLayout] = useState(false);
    fetchData = async () => {

        try {
            const favourites = await getFavourite();
            setFavourites(favourites);

            const favouriteIds = new Set(favourites.map(movie => movie.id));

            const moviesComing = await getMoviesComing();
            // Flag movies in the coming movies list, that exist in the favourite movies
            const flaggedMoviesComing = moviesComing.map(movie => ({
                ...movie,
                favourite: favouriteIds.has(movie.id),
            }));
            setMoviesComing(flaggedMoviesComing);


            const moviesInTheaters = await getMoviesInTheaters();
            // Flag movies in the movies in theaters list , that exist in the favourite movies
            const flaggedMoviesInTheaters = moviesInTheaters.map(movie => ({
                ...movie,
                favourite: favouriteIds.has(movie.id),
            }));
            setMoviesInTheaters(flaggedMoviesInTheaters);

            const topRatedIndia = await getTopRatedIndia();
            // Flag movies in the top rated indian list , that exist in the favourite movies
            const flaggedTopRatedIndia = topRatedIndia.map(movie => ({
                ...movie,
                favourite: favouriteIds.has(movie.id),
            }));
            setTopRatedIndia(flaggedTopRatedIndia);

            const topRatedMovies = await getTopRatedMovies();
            // Flag movies in the top rated movies list , that exist in the favourite movies
            const flaggedTopRatedMovies = topRatedMovies.map(movie => ({
                ...movie,
                favourite: favouriteIds.has(movie.id),
            }));
            setTopRatedMovies(flaggedTopRatedMovies);

            //show Movies in Theaters after page loads
            setMovies(moviesInTheaters)

            setSelectedMenuItem('movie_in_theaters');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (effectRan.current === false) {
            fetchData();
            effectRan.current = true;
            if (window.innerWidth > 767) {
                setShowMobileNavLayout(false);
            } else if (window.innerWidth < 767) {
                setShowMobileNavLayout(true);
            }
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setShowMobileNavLayout(false);
            } else if (window.innerWidth < 767) {
                setShowMobileNavLayout(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuClickHandler = (clickedMenuItem) => {
        setSelectedMenuItem(clickedMenuItem);
        if (clickedMenuItem == 'movie_in_theaters') {
            setMovies(moviesInTheaters);
        } else if (clickedMenuItem == 'coming_soon') {
            setMovies(moviesComing);
        } else if (clickedMenuItem == 'top_rated_indian') {
            setMovies(topRatedIndia);
        } else if (clickedMenuItem == 'top_rated_movies') {
            setMovies(topRatedMovies);
        } else if (clickedMenuItem == 'favourites') {
            setMovies(favourites);
        }
    };

    const searchMoviesHandler = (searchText) => {
        if (selectedMenuItem == 'movie_in_theaters') {
            const filteredMovies = [...moviesInTheaters.filter(movie => {
                if (movie['title'].toLowerCase().includes(searchText.toLowerCase()))
                    return movie
            })];

            setMovies(filteredMovies)
        } else if (selectedMenuItem == 'coming_soon') {
            const filteredMovies = [...moviesComing.filter(movie => {
                if (movie['title'].toLowerCase().includes(searchText.toLowerCase()))
                    return movie
            })];

            setMovies(filteredMovies)
        } else if (selectedMenuItem == 'top_rated_indian') {
            const filteredMovies = [...topRatedIndia.filter(movie => {
                if (movie['title'].toLowerCase().includes(searchText.toLowerCase()))
                    return movie
            })];

            setMovies(filteredMovies)
        } else if (selectedMenuItem == 'top_rated_movies') {
            const filteredMovies = [...topRatedMovies.filter(movie => {
                if (movie['title'].toLowerCase().includes(searchText.toLowerCase()))
                    return movie
            })];

            setMovies(filteredMovies)
        } else if (selectedMenuItem == 'favourites') {
            const filteredMovies = [...favourites.filter(movie => {
                if (movie['title'].toLowerCase().includes(searchText.toLowerCase()))
                    return movie
            })];

            setMovies(filteredMovies)
        }

    };

    useEffect(() => {
        const fetchFavorites = async () => {
            const favourites = await getFavourite();
            setFavourites(favourites);
        }
        fetchFavorites();
    }, [favouriteAdded]);

    const onAddingFavourite = (movie) => {
        if (movie.favourite)
            showToastAddFavourite();
        if (selectedMenuItem == 'movie_in_theaters') {
            putMoviesInTheaters(movie);
            const updatedList = moviesInTheaters.map(item =>
                item.id === movie.id ? { ...item, favourite: movie.favourite } : item
            );
            setMoviesInTheaters(updatedList);
        } else if (selectedMenuItem == 'coming_soon') {
            putMoviesComing(movie);
            const updatedList = moviesComing.map(item =>
                item.id === movie.id ? { ...item, favourite: movie.favourite } : item
            );
            setMoviesComing(updatedList);
        } else if (selectedMenuItem == 'top_rated_indian') {
            putTopRatedIndia(movie);
            const updatedList = topRatedIndia.map(item =>
                item.id === movie.id ? { ...item, favourite: movie.favourite } : item
            );
            setTopRatedIndia(updatedList);
        } else if (selectedMenuItem == 'top_rated_movies') {
            putTopRatedMovies(movie);
            const updatedList = topRatedMovies.map(item =>
                item.id === movie.id ? { ...item, favourite: movie.favourite } : item
            );
            setTopRatedMovies(updatedList);
        }
        setFavouriteAdded((prev) => !prev);
    };

    const showToastAddFavourite = () => {
        toast.success("Added selected movie to Favourites!");
    };
    return (
        <>
            <div className="container-fluid" style={{ display: 'inline-table', width: '97vw' }}>
                <Header menuClickHandler={menuClickHandler}
                    searchMoviesHandler={searchMoviesHandler} />
                {movies && <MovieContent
                    movies={movies}
                    showMobileNavLayout={showMobileNavLayout}
                    showFavourite={selectedMenuItem != 'favourites' ? true : false}
                    handleFavourite={onAddingFavourite}
                />
                }
                <hr />
                <Footer />
                <ToastContainer />

            </div>
        </>
    );
}
export default Home;