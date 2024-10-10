import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieList = ({ movies, title }) => {
  return (
    <div className="m-4 md:m-8 ">
      <h1 className="text-lg md:text-3xl font-semibold mb-4 text-white">
        {title}
      </h1>
      <div className="flex flex-col justify-center md:justify-start md:flex-row md:space-x-3 md:overflow-x-auto scrollbar-hide scrollbarHide">

        {movies &&
          movies.map((movie) => {
            console.log(movie);
            return (
              <Link
                key={movie.id}
                to={`/browse/movie/${movie.id}`}>
                <MovieCard image_path={movie.poster_path} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default MovieList;
