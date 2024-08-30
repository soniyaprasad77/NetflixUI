import React from "react";
import Header from "./Header";
import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMoviesCallApi();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
