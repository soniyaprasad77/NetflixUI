import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMoviesTrailer from "../hooks/useNowPlayingMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.nowPlayingTrailer);
  useNowPlayingMoviesTrailer(movieId);

  return (
    <div className="absolute w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        
        src={`https://www.youtube.com/embed/Idh8n5XuYIA?si=${trailer?.key}&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
