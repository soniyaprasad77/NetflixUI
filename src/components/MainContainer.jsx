import { useSelector } from "react-redux";
import Footer from "./Footer";
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <div className='relative pt-16 md:pt-0 bg-black overflow-hidden'>
        <div className='absolute inset-0 z-0 mt-16 md:mt-0'>
          <VideoBackground movieId={id} />
        </div>
        <div className='relative z-10'>
          <VideoTitle title={original_title} overview={overview} movieId={id} />
        </div>
      </div>
      <SecondaryContainer />
      <Footer />
    </>
  );
};

export default MainContainer;
