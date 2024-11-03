import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
        ></input>
        <button className="py-2 px-4 bg-red-700 text-white font-bold m-4 text-lg rounded-lg col-span-2 hover:bg-black hover:text-red-700">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
