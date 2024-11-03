import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResuts: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
      if (!state.showGptSearch) {
        state.movieResuts = null;
        state.movieNames = null;
      }
    },
    addGptMovieResult: (state, action) => {
      const { movieResuts, movieNames } = action.payload;
      state.movieNames = movieNames;
      state.movieResuts = movieResuts;
    },
    clearMovieDetails: (state, action) => {
      state.movieResuts = null;
      state.movieNames = null;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult, clearMovieDetails } =
  gptSlice.actions;
export default gptSlice.reducer;
