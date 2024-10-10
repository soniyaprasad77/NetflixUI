// src/components/MovieDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { CDN_IMG_URL } from "../utils/constants";
import VideoBackground from "./VideoBackground"
import useNowPlayingMoviesTrailer from "../hooks/useNowPlayingMoviesTrailer";

const MovieDetails = () => {
    const { movieId } = useParams();
    const movieDetails = useMovieDetails(movieId);
    const trailer = useNowPlayingMoviesTrailer(movieId);
    console.log(trailer);
    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details pt-16 md:pt-0 flex flex-col">
            <div className="">
                <div>
                    <iframe
                        className='w-screen aspect-video'
                        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&showinfo=0`}
                        title='YouTube video player'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className=" flex p-4 flex-col  md:flex-row ">
                <div className="w-full md:w-1/2">
                    <div className="w-full md:w-1/2 ">
                        <img className="w-full rounded-lg shadow-lg mt-4" src={`${CDN_IMG_URL}${movieDetails.poster_path}`} alt={movieDetails.title} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex text-center md:text-left items-center text-white">
                    <div className="mx-auto ">
                        <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
                        <p className="text-lg mb-4">{movieDetails.overview}</p>
                        <p className="text-md mb-2"><strong>Release Date:</strong> {movieDetails.release_date}</p>
                        <p className="text-md mb-2"><strong>Rating:</strong> {movieDetails.vote_average}</p>
                        {/* Add more details as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;