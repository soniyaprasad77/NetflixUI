//https://api.themoviedb.org/3/movie/upcoming
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
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

    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
