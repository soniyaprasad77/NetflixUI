import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviesTrailer } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [trailer, setTrailer] = useState(null);

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
      setTrailer(trailerVid);
      dispatch(addNowPlayingMoviesTrailer(trailerVid));
    };

    if (movieId) {
      getVideoData();
    }
  }, [dispatch, movieId]);

  return trailer;
};

export default useNowPlayingMoviesTrailer;
