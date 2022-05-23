import {SEARCH_MOVIE, DELETE_MOVIE } from "../constants";
import {GET_MOVIE } from "../constants";
export const getMovieAction = (obj) => ({ type: GET_MOVIE, payload: obj });
export const searchMovieAction = (movie) => ({
  type: SEARCH_MOVIE,
  payload: movie,
});
export const deleteMovieAction = (id) => ({ type: DELETE_MOVIE, payload: id });
