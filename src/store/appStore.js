import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gptsearch: gptSlice,
  },
});

export default appStore;
