import { Play, Info } from "lucide-react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black text-white'>
      <div className='md:w-96 absolute bottom-8 left-8 lg:bottom-24 lg:left-20'>
        <h1 className='text-xl md:text-4xl font-black mb-2 md:mb-0'>{title}</h1>
        <h2 className='text-md mt-0 md:mt-6 hidden md:block'>{overview}</h2>
        <div className='flex md:gap-2 mt-0 md:mt-6'>
          <button
            type='button'
            class='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs md:text-sm px-2.5 py-1 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
          >
            <Play className='mr-2' size={18} fill='black' /> Play
          </button>
          <Link
            to={`/browse/movie/${movieId}`}
            class='hidden md:block focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium text-sm p-4 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 rounded-full'
          >
            <Info size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
