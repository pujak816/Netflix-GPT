import React from "react";
import { useSelector } from "react-redux";
import VideoContent from "./VideoContent";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!moviesData) return; //Early Return - if movies is null then don't render anything

  const mainMovie = moviesData[1];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <section className="mainContainer">
        <VideoContent title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </section>
    </>
  );
};

export default MainContainer;
