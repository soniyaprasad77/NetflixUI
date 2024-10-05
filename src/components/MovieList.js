import MovieCard from "./MovieCard";
const MovieList = ({ movies, title }) => {
  return (
    <div className="m-4 md:m-8 ">
      <h1 className="text-lg md:text-3xl font-semibold mb-4 text-white">
        {title}
      </h1>
      <div className="flex flex-col justify-center md:justify-start md:flex-row md:space-x-3 md:overflow-x-auto scrollbar-hide scrollbarHide">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} image_path={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
