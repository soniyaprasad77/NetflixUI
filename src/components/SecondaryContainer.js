import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-[#0D3FA9] bg-opacity-80 text-[#FFA900]'>
      <MovieList title='Now Playing' movies={movies.nowPlayingMovies} />
      <MovieList title='Popular' movies={movies.popularMovies} />
      <MovieList title='Top Rated' movies={movies.topRatedMovies} />
      <MovieList title='Upcoming' movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
