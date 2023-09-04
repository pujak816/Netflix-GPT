import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);

  // if (!movieNames) return null;

  return (
    <div className="bg-black/90 p-10 text-white font-bold text-xl">Hello</div>
  );
};

export default GptMovieSuggestion;
