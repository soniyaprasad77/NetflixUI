import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviesTrailer } from "../store/movieSlice";
const useNowPlayingMoviesTrailer = (movieId) => {
    const dispatch = useDispatch();
  useEffect(() => {
    const getVideoData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await response.json();
      console.log(data);
      const filteredData  = data.results.filter( video => video.type === "Trailer");
      console.log(filteredData);
      const trailerVid =  filteredData.length ? filteredData[0] : data.results[0];
      console.log(trailerVid)
      dispatch(addNowPlayingMoviesTrailer(trailerVid));

      
    };
    getVideoData();
  }, []);
};

export default useNowPlayingMoviesTrailer;
