import React from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <form className="gpt_search flex gap-5 p-6 m-6 justify-center text-white">
      <input
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="rounded-lg px-10 py-2 w-[50%] bg-white/20"
      />
      <button className="bg-red-700 rounded-lg px-6  text-white">
        {lang[langKey].search}
      </button>
      <select
        className="rounded-lg px-2  bg-white/20 "
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
