import React, { useState } from "react";
import langConst from "../utils/langConst";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGeminiSuggestedMovies } from "../store/geminiSlice";
import GeminiMovieSuggestions from "./GeminiMovieSuggestions";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const GeminiSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSearchButton = async () => {
    if (inputValue.length === 0) {
      return;
    }
    setErrorMessage(null);
    setLoading(true);

    try {
      const geminiPrompt = `You are the world's best movie recommendation system. 
      Suggest 5 movies based on the query: "${inputValue}". 
      Return the result as a comma-separated list, like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

      const result = await model.generateContent(geminiPrompt);

      if (!result || !result.response) {
        throw new Error("Failed to get response from Gemini AI.");
      }

      const geminiSuggestedMovies = result.response
        .text()
        .split(",")
        .map((movie) => movie.trim());

      // Function to fetch movie details from TMDb
      const fetchMovies = async (movie) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            movie
          )}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch details for movie: ${movie}`);
        }
        return await response.json();
      };

      // Map through suggested movies and fetch details
      const movieDetailsPromises = geminiSuggestedMovies.map((movie) =>
        fetchMovies(movie)
      );

      // Resolve all promises
      const promisedArr = await Promise.all(movieDetailsPromises);

      dispatch(
        addGeminiSuggestedMovies({
          geminiSearchedMovies: geminiSuggestedMovies,
          TMDBsearchedMovies: promisedArr,
        })
      );

      // Extract movie titles or fallback if not found
      const movieTitles = promisedArr.map((data) =>
        data.results.length ? data.results[0].title : "Movie not found"
      );

      // Set movies in the state
      setMovies(movieTitles.join(", "));
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to fetch movie details. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after request
    }
  };

  return (
    <div>
      <form
        className="my-24 w-full md:mx-auto md:w-1/2 border-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col  md:flex-row my-4 md:gap-0 md:bg-black">
          <input
            type="text"
            className="w-full p-4"
            placeholder={langConst[selectedLanguage]?.searchPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleSearchButton}
            disabled={inputValue.length === 0}
            className={`text-white bg-black px-4 py-2 rounded-full md:rounded-none mt-3 w-1/2 mx-auto md:mt-0 md:w-1/4 md:px-8 ${
              inputValue.length === 0
                ? "disabled:bg-[#cccccc] disabled:text-[#666666]"
                : ""
            }`}
          >
            {loading ? "Loading..." : langConst[selectedLanguage]?.search}
          </button>
        </div>
      </form>
      <div className="mt-4 bg-black w-1/2 mx-auto">
        {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}
      </div>
      <div className="w-full bg-[#0D3FA9] text-[#FFA900] bg-opacity-80">
        {movies && (
          <div className="text-white text-2xl md:text-3xl flex md:justify-center font-mono ">
            Recommended Movies
          </div>
        )}
        {movies && <GeminiMovieSuggestions />}
      </div>
    </div>
  );
};

export default GeminiSearchBar;
