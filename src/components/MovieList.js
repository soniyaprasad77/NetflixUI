import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="mx-8">
    <h1 className="text-3xl">{title}</h1>
    <div className="z-40 flex gap-3 overflow-x-scroll ">
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard image_path={movie.poster_path} />
          </div>
        ))}
    </div>
    </div>
  );
};

export default MovieList;
