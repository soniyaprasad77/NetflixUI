import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <VideoBackground movieId={id} />
        </div>
        <div className="relative z-10">
          <VideoTitle title={original_title} overview={overview} />
        </div>
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default MainContainer;
