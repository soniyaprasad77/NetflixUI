import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

// Components
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMoviesCallApi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='relative'>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
