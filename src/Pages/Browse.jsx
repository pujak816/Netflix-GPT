import React from "react";
import useMovies from "../hooks/useMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useMovies();
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
