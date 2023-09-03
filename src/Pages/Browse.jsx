import React from "react";
import useMovies from "../hooks/useMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import NetflixGpt from "../components/NetflixGpt";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  useMovies();
  usePopularMovies();
  return (
    <>
      {showGptSearch ? (
        <NetflixGpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
