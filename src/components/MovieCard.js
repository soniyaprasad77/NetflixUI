import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ image_path }) => {
  return (
    <div className='w-48 cursor-pointer'>
      <img
        src={CDN_IMG_URL + image_path}
        className='rounded-lg'
        alt='movie card'
      ></img>
    </div>
  );
};

export default MovieCard;
