import React from "react";
import langConst from "../utils/langConst";
import { useSelector } from "react-redux";
import { useRef } from "react";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const gptSearch = useRef(null);
  const handleSearchButton = () => {
    console.log(gptSearch.current?.value);
  };

  return (
    <div>
      <form
        className="bg-black my-24 mx-auto w-1/2 border-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex my-4">
          <input
            ref={gptSearch}
            type="text"
            className="w-full p-4"
            placeholder={langConst[selectedLanguage]?.searchPlaceholder}
          />
          <button onClick={handleSearchButton} className="text-white px-8">
            {langConst[selectedLanguage]?.search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
