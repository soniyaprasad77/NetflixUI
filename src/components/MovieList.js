import MovieCard from "./MovieCard";
import scrollbarHide from "tailwind-scrollbar-hide";
const MovieList = ({ movies, title }) => {
  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold mb-4 text-white">{title}</h1>
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide scrollbarHide">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} image_path={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
