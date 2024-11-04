import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GOOGLE_API_KEY } from "../utils/constants";
import { addGptMovieResult, clearMovieDetails } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const fetchMoviesFromTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const query =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " only give names of 5 movies, comma seperated like the example result given ahead: don,sholy,kingkong,avenger,deadpool";

    const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = query;
    const result = await model.generateContent(prompt);
    if (!result.response) {
      return;
    }
    console.log(result?.response?.text());
    const movies = result?.response?.text().split(",");
    if (movies.length === 5) {
      const searchedMoviesPromises = movies.map((movie) =>
        fetchMoviesFromTMDB(movie)
      );

      const movieResultsFromPromise = await Promise.all(searchedMoviesPromises);

      console.log(movieResultsFromPromise);
      dispatch(
        addGptMovieResult({
          movieNames: movies,
          movieResuts: movieResultsFromPromise,
        })
      );
    }
  };

  const clearSearchData = (e) => {
    if (searchText.current.value === "") {
      dispatch(clearMovieDetails());
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
          onChange={clearSearchData}
        ></input>
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-700 text-white font-bold m-4 text-lg rounded-lg col-span-2 hover:bg-black hover:text-red-700"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
