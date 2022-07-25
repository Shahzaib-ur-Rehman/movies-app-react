import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/movieApiKey";
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const showText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${showText}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&plot=full`);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Error");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
