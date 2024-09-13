import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptsearch",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;
