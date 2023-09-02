import React from "react";
import useMovies from "../hooks/useMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useMovies();
  usePopularMovies();
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
