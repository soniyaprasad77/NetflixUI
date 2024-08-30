//https://api.themoviedb.org/3/movie/top_rated
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS
      );
      const jsonData = await data.json();
      console.log(jsonData.results);
      dispatch(addTopRatedMovies(jsonData.results));
    };

    getNowPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
