import React from "react";
import langConst from "../utils/langConst";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  //console.log(selectedLanguage);
 // console.log(langConst.en);

  return (
    <div>
      <form className="bg-black my-24 mx-auto w-1/2 border-black">
        <div className="flex my-4">
          <input
            type="text"
            className="w-full p-4"
            placeholder={langConst[selectedLanguage]?.searchPlaceholder}
          />
          <button className="text-white px-8">
            {langConst[selectedLanguage]?.search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;