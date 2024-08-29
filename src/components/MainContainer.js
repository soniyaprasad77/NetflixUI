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
    <div className="relative">
      <div className="relative">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
      {/* Add padding to push the SecondaryContainer down */}
      <div className="pt-[65%]"> {/* 60% padding corresponds to 16:9 aspect ratio */}
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default MainContainer;
