import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingMoviesTrailer:(state, action)=>{
      state.nowPlayingTrailer = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addNowPlayingMoviesTrailer } = movieSlice.actions;
export default movieSlice.reducer;
