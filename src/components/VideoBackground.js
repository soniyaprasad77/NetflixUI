import { useSelector } from "react-redux";
import useNowPlayingMoviesTrailer from "../hooks/useNowPlayingMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.nowPlayingTrailer);

  useNowPlayingMoviesTrailer(movieId);

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&showinfo=0`}
        title='YouTube video player'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
