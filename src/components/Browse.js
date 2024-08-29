import React from "react";
import Header from "./Header";
import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMoviesCallApi();
  return (
    <div className='relative'>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
