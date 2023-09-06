import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const NetflixGpt = () => {
  return (
    <>
      <div className="hidden lg:block  fixed  ">
        <img src={BG_URL} alt="img" className="" />
      </div>
      <section className="bg-black lg:bg-black/80 h-screen  absolute w-full aspect-video pt-[10%]  ">
        <GptSearchBar />
        <GptMovieSuggestion />
      </section>
    </>
  );
};

export default NetflixGpt;
