import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <img src={IMG_CDN_URL + posterPath} alt="movie_img" className="w-40 pr-6" />
  );
};

export default MovieCard;
