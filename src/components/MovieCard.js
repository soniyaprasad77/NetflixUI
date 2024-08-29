import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ image_path }) => {
  return (
    <div className="w-48">
      <img src={CDN_IMG_URL + image_path} alt="movie card"></img>
    </div>
  );
};

export default MovieCard;
