import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./MovieList";
const GeminiMovieSuggestions = () => {
  const { geminiSearchedMovies, TMDBsearchedMovies } = useSelector(
    (store) => store.gemini
  );

  return (
    <div>
      <div>
        {TMDBsearchedMovies.map((movie, index) => (
          <Movielist
            movies={movie.results}
            title={geminiSearchedMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GeminiMovieSuggestions;
