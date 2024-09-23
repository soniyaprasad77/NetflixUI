import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
  },
  reducers: {
    toggleGeminiSearchView: (state, action) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    
  },
});

export const { toggleGeminiSearchView } = geminiSlice.actions;
export default geminiSlice.reducer;
