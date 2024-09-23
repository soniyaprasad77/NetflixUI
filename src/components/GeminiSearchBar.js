import React, { useRef, useState } from "react";
import langConst from "../utils/langConst";
import { useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const GeminiSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.language.language);
  const geminiSearch = useRef(null);
  const [movies, setMovies] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // To track errors
  const [loading, setLoading] = useState(false); // To track loading state

  const handleSearchButton = async () => {
    setErrorMessage(null); // Reset any previous error messages
    setLoading(true); // Set loading state when fetching data

    try {
      const geminiPrompt = `You are the world's best movie recommendation system. 
      Suggest 5 movies based on the query: "${geminiSearch.current.value}".
      Return the result as a comma-separated list, like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

      const result = await model.generateContent(geminiPrompt);
      const geminiSuggestedMovies = result.response.text().split(",");

      // Function to fetch movie details from themoviedb
      const fetchMovies = (movie) => {
        return fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movie.trim()}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        ).then((response) => response.json()); // return the fetch request
      };

      // Map through suggested movies and fetch details
      const movieDetails = geminiSuggestedMovies.map((movie) =>
        fetchMovies(movie)
      );

      // Resolve all promises
      const promisedArr = await Promise.all(movieDetails);
      console.log(promisedArr);

      // Extract movie titles or other details you need from the response
      const movieTitles = promisedArr.map(
        (data) => data.results[0]?.title || "Movie not found"
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
        className="bg-black my-24 mx-auto w-1/2 border-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex my-4">
          <input
            ref={geminiSearch}
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

export default GeminiSearchBar;
