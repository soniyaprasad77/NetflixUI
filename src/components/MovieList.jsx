import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

const MovieList = ({ categoryTitle, movies }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayedMovies(movies?.slice(0, 4));
    } else {
      setDisplayedMovies(movies);
    }
  }, [isMobile, movies]);

  return (
    <div className=''>
      <h1 className='px-4 text-xl md:text-3xl font-semibold mb-4 text-white'>
        {categoryTitle}
      </h1>

      <div className='flex flex-col md:flex-row md:space-x-4 overflow-x-auto md:overflow-x-scroll scrollbar-hide'>
        {displayedMovies &&
          displayedMovies.map((movie) => (
            <Link key={movie.id} to={`/browse/movie/${movie.id}`}>
              <div className='mb-6 px-4 md:px-0 md:mb-0'>
                <MovieCard movie={movie} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
