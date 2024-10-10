// src/hooks/useMovieDetailsCallApi.js
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        API_OPTIONS
      );
      const data = await response.json();
    //   console.log(data);
      setMovieDetails(data);
    };

    if (movieId) {
      getMovieDetails();
    }
  }, [movieId]);

  return movieDetails;
};

export default useMovieDetails;
