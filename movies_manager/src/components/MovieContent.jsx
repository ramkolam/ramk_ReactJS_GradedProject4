import MovieDetails from '../components/MovieDetails';
import Modal from '../components/Modal';
import MovieCard from "./MovieCard";
import { useState } from "react";

const MovieContent = (props) => {
    const { movies, showMobileNavLayout, showFavourite, handleFavourite } = props
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openPortal = (movie) => {
        setSelectedMovie(movie);
        setIsOpen(true);
    };

    const handleClose=() => {
        setIsOpen(false);
        const myDiv = document.getElementById("header");
        myDiv.style.display = "block";
    }


    return (
        <>
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <small>Movies</small>
                    </div>
                </div>
                <div className={showMobileNavLayout ? "" : "row"} >


                    {

                        movies.map((movie) => (
                            <div className="col-lg-2" key={movie.id} style={{ paddingLeft: '50px', paddingRight: '50px', marginTop: '20px' }}>
                                <div className="card" >
                                    <>
                                        <MovieCard movie={movie} showFavourite={showFavourite} handleFavourite={handleFavourite} openPortal={openPortal}/>

                                        <Modal isOpen={isOpen} handleClose={handleClose}>
                                            <MovieDetails movie={selectedMovie} showMobileNavLayout={showMobileNavLayout}></MovieDetails>
                                        </Modal>
                                    </>
                                </div>
                            </div>
                        ))


                    }
                    <>

                    </>

                </div>


            </div>
        </>
    );
};



export default MovieContent;