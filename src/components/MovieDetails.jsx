import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    // const { movieId } = useParams();
    const movie = useSelector((store) => store.movies);
    console.log(movie);
    if (!movie) return null;
  
    return (
        <div className="movie-details-modal">
            {/* <h2>{movie.title}</h2>
            <p>{movie.description}</p> */}

            {/* Video Player */}
            <div className="video-container">
                <h1>Hello this is movie details container</h1>
            </div>

            {/* <div className="movie-meta">
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
            </div> */}
        </div>
    );
};
export default MovieDetails;