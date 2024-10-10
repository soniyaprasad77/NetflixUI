import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GeminiSearchPage from "./GeminiSearchPage";
import { Outlet } from "react-router-dom"; // Import Outlet
import { useLocation } from "react-router-dom";

// Components
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  const geminiSearch = useSelector((store) => store.gemini.showGeminiSearch);

  useNowPlayingMoviesCallApi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  const location = useLocation(); // Import and use useLocation hook from react-router-dom

  return (
    <div className='relative'>
      <Header />
      {location.pathname === "/browse" || location.pathname === "/browse/" ? (
        <>
          {geminiSearch ? <MainContainer /> : <GeminiSearchPage />}
        </>
      ) : <Outlet />}
      {/* This will render the nested routes */}
    </div>
  );
};

export default Browse;
