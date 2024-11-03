import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addUpComingMovies(state, action) {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedMovies,
  addPopularMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
