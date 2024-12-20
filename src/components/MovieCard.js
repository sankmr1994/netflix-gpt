import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    posterPath && (
      <div className="w-48 pr-4">
        <img src={IMG_CDN + posterPath} alt="movie-img"></img>
      </div>
    )
  );
};

export default MovieCard;
