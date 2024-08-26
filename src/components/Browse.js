import React from "react";
import Header from "./Header";
import useNowPlayingMoviesCallApi from "../hooks/useNowPlayingMoviesCallApi";

const Browse = () => {
  useNowPlayingMoviesCallApi();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
