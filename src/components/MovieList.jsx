import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <section className="movie_list text-white pb-4 sm:pb-8">
      <h1 className="text-xs sm:text-2xl font-bold py-2 sm:py-5 ">{title}</h1>
      <div className="cards_container overflow-auto flex cursor-pointer">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
