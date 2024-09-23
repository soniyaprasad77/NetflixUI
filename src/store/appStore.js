import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";
import geminiSlice from "./geminiSlice";
import langSlice from "./langSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gemini: geminiSlice,
    language: langSlice,
  },
});

export default appStore;
