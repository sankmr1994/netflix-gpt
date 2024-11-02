import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white p-2 px-10 text-lg text-black  rounded-md ">
          ▶️Play
        </button>
        <button className="bg-gray-500 p-2 px-10 text-lg text-white bg-opacity-60 rounded-md mx-4">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
