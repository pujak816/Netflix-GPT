import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const NetflixGpt = () => {
  return (
    <>
      <div className="fixed">
        <img src={BG_URL} alt="img" />
      </div>
      <section className="bg-black/80 absolute w-full aspect-video pt-[10%]  ">
        <GptSearchBar />
        <GptMovieSuggestion />
      </section>
    </>
  );
};

export default NetflixGpt;
