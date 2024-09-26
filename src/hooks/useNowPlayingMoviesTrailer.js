import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMoviesTrailer } from "../store/movieSlice";

const useNowPlayingMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const nowPlayingTrailer = useSelector(
    (store) => store.movies.nowPlayingTrailer
  );
  useEffect(() => {
    const getVideoData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await response.json();
      const filteredData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailerVid = filteredData.length
        ? filteredData[0]
        : data.results[0];
      dispatch(addNowPlayingMoviesTrailer(trailerVid));
    };
    !nowPlayingTrailer && getVideoData();
  }, [dispatch, movieId]);
};

export default useNowPlayingMoviesTrailer;
