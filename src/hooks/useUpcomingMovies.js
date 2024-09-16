//https://api.themoviedb.org/3/movie/upcoming
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS
      );
      const jsonData = await data.json();
      //console.log(jsonData.results);
      dispatch(addUpcomingMovies(jsonData.results));
    };

    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
