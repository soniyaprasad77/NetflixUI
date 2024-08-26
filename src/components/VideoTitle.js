import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{overview}</h2>
    </div>
  );
};

export default VideoTitle;
