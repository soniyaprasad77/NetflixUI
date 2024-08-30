import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS
      );
      const jsonData = await data.json();
      console.log(jsonData.results);
      dispatch(addPopularMovies(jsonData.results));
    };

    getPopularMovies();
  }, []);
};

export default usePopularMovies;
