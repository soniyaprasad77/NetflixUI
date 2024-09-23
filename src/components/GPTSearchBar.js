import React, { useRef, useState } from "react";
import langConst from "../utils/langConst";
import { useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const gptSearch = useRef(null);
  const [movies, setMovies] = useState(null);
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
      const prompt = gptPrompt;
      const result = await model.generateContent(prompt);
      const geminiSuggestedMovies = result.response.text().split(",");
      setMovies(geminiSuggestedMovies);
      const fetchMovies = (movie) => {
        fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
      };
      geminiSuggestedMovies.map((movie) => fetchMovies(movie));
    } catch (error) {
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
      </form>
      <div className="mt-4 bg-black w-1/2 mx-auto">
        {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}
        {movies && (
          <div className="text-white mt-4 z-10 text-xl bg-black">
            Recommended Movies: {movies}
          </div>
        )}
      </div>
    </div>
  );
};

export default GPTSearchBar;
