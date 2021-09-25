import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'
import MovieDetail from './MovieDetail';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [movieVisibility, setMovieVisibility] = useState(false);
    const [movieSelected, setMovieSelection] = useState({});

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])

    // console.log(movies)
    const handleClick = (movie) => {
        setMovieVisibility(true);
        setMovieSelection(movie);  
    };

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {movieVisibility && <MovieDetail {...movieSelected} setMovieVisibility={setMovieVisibility} />}
        </div>
    )
}

export default Row
