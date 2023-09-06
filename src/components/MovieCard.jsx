import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <img
      src={IMG_CDN_URL + posterPath}
      alt="movie_img"
      className="w-10 sm:w-24 lg:w-40 pr-[2px] sm:pr-2"
    />
  );
};

export default MovieCard;
