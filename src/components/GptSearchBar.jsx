import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example results given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("error");
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //For each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResult: tmdbResults })
    );
  };

  return (
    <form
      className="gpt_search flex gap-1 sm:gap-5 p-6 m-6 justify-center text-white text-[8px] sm:text-base"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="rounded-lg px-4 sm:px-10 py-[2px] sm:py-2 w-[70%] sm:w-[55%] bg-white/20"
      />
      <button
        className="bg-red-700 rounded-lg px-1 sm:px-6 text-[6px] sm:text-base text-white"
        onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
      <select
        className="rounded-lg px-1 sm:px-6 text-[6px] sm:text-base bg-white/20 "
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option
            key={lang.identifier}
            value={lang.identifier}
            className="text-black"
          >
            {lang.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GptSearchBar;
