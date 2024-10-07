const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black text-white">
      <div className="md:w-72 absolute top-16 left-8 md:top-40 md:left-12">
        <h1 className="text-md md:text-4xl font-bold ">{title}</h1>
        <h2 className="text-md mt-0 md:mt-6 hidden md:block ">{overview}</h2>
        <div className="flex md:gap-2 mt-0 md:mt-6">
          <button className="bg-white w-18 text-xs px-3 py-2 md:text-lg md:py-4 whitespace-nowrap md:w-44 rounded-lg text-black">
            {" "}
            ▶ Play
          </button>
          <button className="shadow-md py-4 whitespace-nowrap w-44 rounded-lg hidden md:block">
            {" "}
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
