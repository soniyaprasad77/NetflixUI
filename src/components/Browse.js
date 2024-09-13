import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
// Components
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  const searchGPT = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMoviesCallApi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative">
      <Header />
      {searchGPT ? <MainContainer /> : <GPTSearch />}
    </div>
  );
};

export default Browse;
