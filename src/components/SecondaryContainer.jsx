import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <section className="secondaryContainer bg-black h-screen sm:h-auto">
        <div className="-mt-6 sm:-mt-28 lg:-mt-36 relative pl-4 sm:pl-12">
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </section>
    </>
  );
};

export default SecondaryContainer;
