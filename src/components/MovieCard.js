import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ image_path }) => {
  return (
    <div className='flex-shrink-0 w-48 cursor-pointer'>
      <img
        src={CDN_IMG_URL + image_path}
        className='w-48 rounded-lg'
        alt='movie card'
      ></img>
    </div>
  );
};

export default MovieCard;
