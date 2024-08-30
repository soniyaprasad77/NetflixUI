import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="m-8 relative">
      <h1 className="text-3xl font-semibold mb-4 text-white">{title}</h1>
      <div className="flex gap-3">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} image_path={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
