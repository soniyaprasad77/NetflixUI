import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import GeminiSearchPage from "./GeminiSearchPage";

// Components
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";

const Browse = () => {
  const geminiSearch = useSelector((store) => store.gemini.showGeminiSearch);
  const location = useLocation();

  // Custom hook to fetch movies
  useFetchMovies();

  return (
    <div className='relative'>
      <Header />
      {location.pathname === "/" ? (
        <>{geminiSearch ? <MainContainer /> : <GeminiSearchPage />}</>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Browse;
