import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  // Selectors to fetch existing movie data from the store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    // Function to fetch all categories of movies
    const fetchMovies = async () => {
      // Fetching Now Playing Movies
      if (!nowPlayingMovies) {
        const nowPlayingData = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const nowPlayingJson = await nowPlayingData.json();
        dispatch(addNowPlayingMovies(nowPlayingJson.results));
      }

      // Fetching Popular Movies
      if (!popularMovies) {
        const popularData = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          API_OPTIONS
        );
        const popularJson = await popularData.json();
        dispatch(addPopularMovies(popularJson.results));
      }

      // Fetching Top Rated Movies
      if (!topRatedMovies) {
        const topRatedData = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated",
          API_OPTIONS
        );
        const topRatedJson = await topRatedData.json();
        dispatch(addTopRatedMovies(topRatedJson.results));
      }

      // Fetching Upcoming Movies
      if (!upcomingMovies) {
        const upcomingData = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming",
          API_OPTIONS
        );
        const upcomingJson = await upcomingData.json();
        dispatch(addUpcomingMovies(upcomingJson.results));
      }
    };

    fetchMovies();
  }, [
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    dispatch,
  ]);
};

export default useFetchMovies;
