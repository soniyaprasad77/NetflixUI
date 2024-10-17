import { configureStore } from "@reduxjs/toolkit";

// Slices
import geminiSlice from "./geminiSlice";
import langSlice from "./langSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gemini: geminiSlice,
    language: langSlice,
  },
});

export default appStore;
