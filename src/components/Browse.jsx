import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GeminiSearchPage from "./GeminiSearchPage";
// Components
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  const geminiSearch = useSelector((store) => store.gemini.showGeminiSearch);

  useNowPlayingMoviesCallApi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='relative'>
      <Header />
      {geminiSearch ? <MainContainer /> : <GeminiSearchPage />}
    </div>
  );
};

export default Browse;
