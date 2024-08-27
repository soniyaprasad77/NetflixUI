import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-28 ml-12 w-1/4">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <h2 className="text-xl mt-6">{overview}</h2>
      <div className="flex gap-2 justify-between mt-6">
        <button className="bg-gray-200 py-4 whitespace-nowrap w-44 rounded-lg">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-200 py-4 whitespace-nowrap w-44 rounded-lg">
          {" "}
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
