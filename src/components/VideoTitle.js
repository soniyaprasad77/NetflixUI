import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute z-10 mb-28 bg-gradient-to-r from-black text-white">
    <div className="w-1/3 my-44 mx-8 px-12">
    <h1 className="text-4xl font-bold  ">{title}</h1>
      <h2 className="text-lg mt-6 ">{overview}</h2>
      <div className="flex gap-2 justify-between mt-6">
        <button className="bg-gray-400 py-4 whitespace-nowrap w-44 rounded-lg">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-400 py-4 whitespace-nowrap w-44 rounded-lg">
          {" "}
          ℹ️ More Info
        </button>
      </div>
    </div>
    </div>
  );
};

export default VideoTitle;
