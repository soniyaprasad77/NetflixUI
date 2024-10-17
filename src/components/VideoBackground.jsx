import { useSelector } from "react-redux";
import useNowPlayingMoviesTrailer from "../hooks/useNowPlayingMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.nowPlayingTrailer);

  useNowPlayingMoviesTrailer(movieId);

  return (
    <iframe
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailer?.key}?playlist=${trailer?.key}&loop=1&autoplay=1&mute=1&showinfo=0&controls=0`}
      title='YouTube video player'
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
