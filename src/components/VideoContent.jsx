import React from "react";

const VideoContent = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 w-1/3">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black hover:bg-white/70 px-4 py-1 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-white/20 text-white px-4 py-1 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoContent;
