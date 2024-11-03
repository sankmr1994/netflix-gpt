import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { NETFLIXGB_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className={"h-screen relative bg-[url('" + NETFLIXGB_URL + "')]"}>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
