import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMoviesCallApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const jsonData = await data.json();
      //console.log(jsonData.results);
      dispatch(addNowPlayingMovies(jsonData.results));
    };

    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMoviesCallApi;
