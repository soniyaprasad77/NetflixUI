import { useSelector } from "react-redux";
import useNowPlayingMoviesTrailer from "../hooks/useNowPlayingMoviesTrailer";
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.nowPlayingTrailer);
  console.log(trailer);
  useNowPlayingMoviesTrailer(movieId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/Idh8n5XuYIA?si=${trailer?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
