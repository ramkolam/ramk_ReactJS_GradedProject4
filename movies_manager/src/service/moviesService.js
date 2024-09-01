import axios from "axios"

const getMoviesComing = () => {

    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies-coming`)
        .then(response => response.data)
}

const getMoviesInTheaters = () => {

    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters`)
        .then(response => response.data)
}

const getTopRatedIndia = () => {

    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india`)
        .then(response => response.data)
}

const getTopRatedMovies = () => {

    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies`)
        .then(response => response.data)
}

const getFavourite = () => {

    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/favourite`)
        .then(response => response.data)
}

const postFavourite = (newFavourite) => {

    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/favourite`, newFavourite, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

const getFavouriteById = (id) => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/favourite/${id}`;
    return axios.get(url)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
}

const deleteFavouriteById = (id) => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/favourite/${id}`;
    return axios.delete(url)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
}

const putMoviesInTheaters = (newMovieInTheaters) => {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters/${newMovieInTheaters.id}`, newMovieInTheaters, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
    .catch(error => Promise.reject(error));        
}
const putMoviesComing = (newMovieComing) => {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/movies-coming/${newMovieComing.id}`, newMovieComing, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
    .catch(error => Promise.reject(error));        
}
const putTopRatedIndia = (newTopRatedIndia) => {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india/${newTopRatedIndia.id}`, newTopRatedIndia, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
    .catch(error => Promise.reject(error));        
}
const putTopRatedMovies = (newTopRatedMovies) => {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies/${newTopRatedMovies.id}`, newTopRatedMovies, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
    .catch(error => Promise.reject(error));        
}


export {
    getMoviesComing, getMoviesInTheaters, getTopRatedIndia, getTopRatedMovies, getFavourite, 
    postFavourite, getFavouriteById, deleteFavouriteById, putMoviesInTheaters, putMoviesComing,
    putTopRatedIndia, putTopRatedMovies
}