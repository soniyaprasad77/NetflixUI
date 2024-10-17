import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black text-[#FFA900]'>
      <MovieList categoryTitle='Now Playing' movies={movies.nowPlayingMovies} />
      <MovieList categoryTitle='Popular' movies={movies.popularMovies} />
      <MovieList categoryTitle='Top Rated' movies={movies.topRatedMovies} />
      <MovieList categoryTitle='Upcoming' movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
