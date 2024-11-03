import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
