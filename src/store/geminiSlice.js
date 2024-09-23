import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    geminiSearchedMovies: null,
    TMDBsearchedMovies: null,
  },
  reducers: {
    toggleGeminiSearchView: (state, action) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addGeminiSuggestedMovies: (state, action) => {
      const { geminiSearchedMovies, TMDBsearchedMovies } = action.payload;
      state.geminiSearchedMovies = geminiSearchedMovies;
      state.TMDBsearchedMovies = TMDBsearchedMovies;
    },
  },
});

export const { toggleGeminiSearchView, addGeminiSuggestedMovies } =
  geminiSlice.actions;
export default geminiSlice.reducer;
