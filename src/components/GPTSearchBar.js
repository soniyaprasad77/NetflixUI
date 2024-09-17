import React, { useRef, useState } from "react";
import langConst from "../utils/langConst";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const gptSearch = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null); // To track errors
  const [loading, setLoading] = useState(false); // To track loading state

  const handleSearchButton = async () => {
    setErrorMessage(null); // Reset any previous error messages
    setLoading(true); // Set loading state when fetching data
    // setMovies(""); // Clear previous results

    const gptPrompt = `You are the world's best movie recommendation system. 
      Suggest 5 movies based on the query: "${gptSearch.current.value}".
      Return the result as a comma-separated list, like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

    try {
      const gptResults = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptPrompt }],
      });

      if (!gptResults.choices) {
        throw new Error("No results found");
      }

      // Handle successful response
      //  setMovies(gptResults.choices[0]?.message?.content);
    } catch (error) {
      if (error.response?.status === 429) {
        setErrorMessage("You've exceeded your quota. Please try again later.");
      } else if (error.response?.status === 404) {
        setErrorMessage("The requested model could not be found.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      console.error("Error:", error);
    } finally {
      setLoading(false); // Reset loading state after request
    }
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
            {loading ? "Loading..." : langConst[selectedLanguage]?.search}
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}
        {/* {movies && ( */}
        {/* <div className="text-white mt-4"> */}
        {/* Recommended Movies: {movies} */}
        {/* </div> */}
        {/* )} */}
      </form>
    </div>
  );
};

export default GPTSearchBar;
