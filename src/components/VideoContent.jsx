import React from "react";

const VideoContent = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[25%] lg:pt-[20%] pl-4 sm:pl-10 absolute text-white bg-gradient-to-r from-black">
      <div className="w-[60%]">
        <h1 className="font-bold text-sm sm:text-2xl lg:text-4xl ">{title}</h1>
        <p className="py-6  hidden lg:block">{overview}</p>
        <div className="flex gap-2 text-[4px] sm:text-base mt-2 sm:mt-4 ">
          <button className="bg-white text-black hover:bg-white/70 px-2 py-1 sm:px-4 sm:py-1 rounded-lg">
            ▶️ Play
          </button>
          <button className="bg-white/20 text-white px-2 py-1 sm:px-4 sm:py-1 rounded-lg">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
