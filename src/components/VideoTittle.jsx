import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-transparent z-10">
      <div className="w-1/3 absolute top-[30%] left-12 text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <p className="text-lg mb-6 leading-relaxed">{overview}</p>

        <div className="flex gap-3">
          <button className="bg-white/90 text-black px-6 py-2 rounded-md font-bold hover:bg-white">
            ▶ Play
          </button>

          <button className="bg-gray-500/60 text-white px-6 py-2 rounded-md font-bold hover:bg-gray-500/80">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
