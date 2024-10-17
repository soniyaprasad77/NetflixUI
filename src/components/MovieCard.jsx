import { CDN_IMG_URL } from "../utils/constants";
import { Info, Play } from "lucide-react";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title, overview } = movie;

  if (!poster_path) return null;

  return (
    <div className='relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition duration-300 min-w-[200px] h-auto aspect-[2/3]'>
      <img
        src={CDN_IMG_URL + poster_path}
        className='w-full h-full object-cover rounded-lg'
        alt={original_title}
      />

      <div className='absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
        <h3 className='text-white text-base font-bold mb-2'>
          {original_title}
        </h3>
        <p className='text-white text-xs mb-4 line-clamp-3'>{overview}</p>

        <div className='flex space-x-2'>
          <button className='bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition flex items-center w-18 text-xs'>
            <Play className='mr-2' size={14} fill='black' /> Play
          </button>
          <button className='text-white font-bold py-2 px-4 rounded-lg focus:ring-1 focus:ring-gray-100 p-4 transition flex items-center w-fit text-base'>
            <Info size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
